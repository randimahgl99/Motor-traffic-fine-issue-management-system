import express, { Application } from "express";
import dotenv from "dotenv";

import connect from "./connection";
//import { CivilUserController } from "./Controllers/civilUserController";
import userRoute from "./Routes/userRoute";


dotenv.config();

const app: Application = express();
const PORT = 5000;
//const civilUserController = new CivilUserController();



app.use(express.json());

app.use("/auth", userRoute);

// app.post("/auth/register", (req, res) => civilUserController.register(req, res));
// app.post("/auth/login", (req, res) => civilUserController.login(req, res));
// app.post("/auth/adminRegister", (req, res) => civilUserController.adminRegister(req, res));


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
