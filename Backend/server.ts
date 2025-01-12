import express, { Application } from "express";
import dotenv from "dotenv";

import connect from "./connection";
import userRoute from "./Routes/userRoute";
// import adminRoute from "./Routes/adminRoute";
import cors from 'cors';
import policeOfficerRoute from "./Routes/policeOfficerRoute";
import fineManagemetRoute from "./Routes/fineManagementRoute";



dotenv.config();

const app: Application = express();
const PORT = 5000;
app.use(cors());

app.use(express.json());
app.use("/users", userRoute);
// app.use("/admin", adminRoute);
app.use("/policeOfficers", policeOfficerRoute);
app.use("/fine", fineManagemetRoute);

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


