import mongoose from "mongoose";

const storySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Please add a title (e.g., "Parent of Aarav")'],
    },
    story: {
      type: String,
      required: [true, "Please add the story/testimonial"],
    },
    slug: {
      type: String,
      default: "",
      index: true,
    },
    imageName: {
      type: String,
      default: "",
    },
    imageUrl: {
      type: String,
      default: "",
    },
    cloudinaryImageId: {
      type: String,
      default: "",
    },
  },
  { timestamps: true },
);

const Story = mongoose.model("Story", storySchema);
export default Story;
