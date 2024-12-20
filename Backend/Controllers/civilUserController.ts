import { Request, Response } from "express";
import { CivilUserService } from "../Services/civilUserServices";

const civilUserService = new CivilUserService();

export class CivilUserController {
    async register(req: Request, res: Response): Promise<void> {
        try {
            const { name, email, password } = req.body;

            const newUser = await civilUserService.registerUser(name, email, password);

            res.status(201).json({
                success: true,
                message: "User registered successfully",
                user: { id: newUser._id, name: newUser.name, email: newUser.email },
            });
        } catch (error: any) {
            res.status(400).json({ success: false, message: error.message });
        }
    }

    async login(req: Request, res: Response): Promise<void> {
        try {
            const { email, password } = req.body;

            const token = await civilUserService.loginUser(email, password);

            res.status(200).json({
                success: true,
                message: "Login successful",
                token,
            });
        } catch (error: any) {
            res.status(400).json({ success: false, message: error.message });
        }
    }
}
