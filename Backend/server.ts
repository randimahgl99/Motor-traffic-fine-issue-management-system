import express, { Application } from "express";
import dotenv from "dotenv";

import connect from "./connection";
import userRoute from "./Routes/userRoute";
import adminRoute from "./Routes/adminRoute";
import cors from 'cors';



dotenv.config();

const app: Application = express();
const PORT = 5000;
app.use(cors());

app.use(express.json());

app.use("/users", userRoute);
app.use("/admin", adminRoute);

const startServer = async () => {
    try {
        await connect();
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    } catch (error) {
        console.error("Error starting server:", error);
    }
};

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

