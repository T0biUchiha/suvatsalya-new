import mongoose from "mongoose";
import {
  backfillAllArticleSlugs,
  backfillAllBenefitSlugs,
  backfillAllStorySlugs,
} from "../utils/slugify.js";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
    await backfillAllArticleSlugs();
    await backfillAllStorySlugs();
    await backfillAllBenefitSlugs();
  } catch (error) {
    console.error(`Error connecting to MongoDB: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
