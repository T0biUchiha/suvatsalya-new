import mongoose from 'mongoose';

const storySchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please add a title (e.g., "Parent of Aarav")'],
  },
  story: {
    type: String,
    required: [true, 'Please add the story/testimonial'],
  },
  // This will store the name of the image, e.g., 'hero1.jpg'
  imageName: {
    type: String,
    required: [true, 'Please select an image'],
  },
}, { timestamps: true });

const Story = mongoose.model('Story', storySchema);
export default Story;