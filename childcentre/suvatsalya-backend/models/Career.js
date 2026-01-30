import mongoose from 'mongoose';

const careerSchema = new mongoose.Schema({
  key: {
    type: String,
    default: 'careerLink',
    unique: true
  },
  googleFormUrl: {
    type: String,
    required: false, // 1. Change this to false
    default: 'https://forms.google.com/'
  },
  isAccepting: { // 2. Add this new field
    type: Boolean,
    default: true
  }
}, { timestamps: true });

const Career = mongoose.model('Career', careerSchema);
export default Career;