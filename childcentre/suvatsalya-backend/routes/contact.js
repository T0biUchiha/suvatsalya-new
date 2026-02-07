import express from 'express';
import ContactForm from '../models/ContactForm.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

// ---
// PUBLIC: SUBMIT A NEW CONTACT FORM
// POST /api/contact
// ---
router.post('/', async (req, res) => {
  const { name, email, phone, message } = req.body;
  try {
    const newSubmission = new ContactForm({ name, email, phone, message });
    await newSubmission.save();
    res.status(201).json({ message: 'Form submitted successfully. We will get back to you soon.' });
  } catch (error) {
    res.status(500).json({ message: `Error submitting form: ${error.message}` });
  }
});

// ---
// ADMIN: GET ALL FORM SUBMISSIONS
// GET /api/contact
// ---
router.get('/', protect, async (req, res) => {
  try {
    // Sort by newest first
    const submissions = await ContactForm.find().sort({ createdAt: -1 });
    res.status(200).json(submissions);
  } catch (error) {
    res.status(500).json({ message: `Server error: ${error.message}` });
  }
});

// ---
// ADMIN: DELETE A FORM SUBMISSION
// DELETE /api/contact/:id
// ---
router.delete('/:id', protect, async (req, res) => {
  try {
    const submission = await ContactForm.findById(req.params.id);
    if (!submission) {
      return res.status(404).json({ message: 'Submission not found' });
    }
    await submission.deleteOne();
    res.status(200).json({ message: 'Submission deleted' });
  } catch (error) {
    res.status(500).json({ message: `Server error: ${error.message}` });
  }
});

// ---
// ADMIN: MARK ALL QUERIES AS READ (NEW)
// PUT /api/contact/readall
// ---
router.put('/readall', protect, async (req, res) => {
  try {
    // Update all queries where isRead is false
    await ContactForm.updateMany(
      { isRead: false },
      { $set: { isRead: true } }
    );
    res.status(200).json({ message: 'All queries marked as read' });
  } catch (error) {
    res.status(500).json({ message: `Server error: ${error.message}` });
  }
});

export default router;