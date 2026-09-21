import mongoose from "mongoose";

const benefitSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      default: "",
      index: true,
    },
    imageUrl: {
      type: String,
      required: false,
    },
    cloudinaryImageId: {
      type: String,
      required: false,
    },
    pdfUrl: {
      type: String,
      required: false,
    },
    pdfFileName: {
      type: String,
      required: false,
      trim: true,
    },
    cloudinaryPdfId: {
      type: String,
      required: false,
    },
    websiteLink: {
      type: String,
      required: false,
      trim: true,
    },
    relatedLinks: {
      type: [
        {
          title: { type: String, required: true, trim: true },
          url: { type: String, required: true, trim: true },
        },
      ],
      default: [],
      validate: {
        validator: (links) => links.length <= 4,
        message: "A benefit can have up to four related links.",
      },
    },
  },
  { timestamps: true },
);

const Benefit = mongoose.model("Benefit", benefitSchema);
export default Benefit;
