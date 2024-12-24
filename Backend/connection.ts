import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config(); // Ensure environment variables are loaded

const uri = process.env.MONGODB_URL;

if (!uri) {
    throw new Error("MONGODB_URL is not defined in the environment variables");
}

const connect = async () => {
    try {
        await mongoose.connect(uri);
        console.log("Connected to MongoDB");
    } catch (err) {
        console.error("Error connecting to MongoDB", err);
        process.exit(1);
    }
};

export default connect;
