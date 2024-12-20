import mongoose from "mongoose";
import dotenv from "dotenv"

const uri = process.env.MONGODB_URL || "mongodb://localhost:27017/test";

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
