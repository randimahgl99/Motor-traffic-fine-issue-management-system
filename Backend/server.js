"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const connection_1 = __importDefault(require("./connection"));
const userRoute_1 = __importDefault(require("./Routes/userRoute"));
const adminRoute_1 = __importDefault(require("./Routes/adminRoute"));
const cors_1 = __importDefault(require("cors"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = 5000;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use("/users", userRoute_1.default);
app.use("/admin", adminRoute_1.default);
const startServer = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, connection_1.default)();
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    }
    catch (error) {
        console.error("Error starting server:", error);
    }
});
startServer();
// import express, { Application, Request, Response, NextFunction } from "express";
// import dotenv from "dotenv";
// import cors from "cors";
// import connect from "./connection"; // Import DB connection logic
// import userRoute from "./Routes/userRoute"; // Import user routes
// import adminRoute from "./Routes/adminRoute"; // Import admin routes
// dotenv.config();
// const app: Application = express();
// const PORT = process.env.PORT || 5000;
// // CORS Configuration
// app.use(
//     cors({
//     origin: "http://localhost:3000", // Replace with your frontend's URL
//     methods: ["GET", "POST", "PUT", "DELETE"], // Allowed HTTP methods
//     allowedHeaders: ["Content-Type", "Authorization"], // Allowed headers
//     credentials: true, // Allow cookies if needed
//     })
// );
// // Middleware to parse JSON requests
// app.use(express.json());
// // Register routes
// app.use("/users", userRoute);
// app.use("/admin", adminRoute);
// // Example additional route
// app.post("/api/register", async (req: Request, res: Response) => {
//   try {
//     const { name, email, password } = req.body;
//     // Simulate user registration logic (You can replace this with your actual controller logic)
//     res.status(201).json({ success: true, message: "User registered successfully" });
//   } catch (error) {
//     res.status(400).json({ success: false, message: error });
//   }
// });
// // Preflight Request Handling
// app.options("*", cors()); // Handles all OPTIONS requests for CORS
// // Error handling middleware
// app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
//   console.error(err.stack);
//   res.status(500).json({ success: false, message: "Something went wrong" });
// });
// // Start server with database connection
// const startServer = async () => {
//   try {
//     await connect(); // Ensure the database connection is established
//     app.listen(PORT, () => {
//       console.log(`Server is running on http://localhost:${PORT}`);
//     });
//   } catch (error) {
//     console.error("Error starting server:", error);
//   }
// };
// startServer();
