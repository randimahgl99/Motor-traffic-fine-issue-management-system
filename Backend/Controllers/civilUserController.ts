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

    async adminRegister(req: Request, res: Response): Promise<void> {
        try {
            const { name, email, password } = req.body;

            const newUser = await civilUserService.registerAdminUser(name, email, password);

            res.status(201).json({
                success: true,
                message: "User registered successfully",
                user: { id: newUser._id, name: newUser.name, email: newUser.email },
            });
        } catch (error: any) {
            res.status(400).json({ success: false, message: error.message });
        }
    }
    async deleteUser(req: Request, res: Response): Promise<void> {
        try {
            const { id } = req.params;
    
            const result = await civilUserService.deleteUser(id);
    
            res.status(200).json(result);
        } catch (error: any) {
            res.status(400).json({ success: false, message: error.message });
        }
    }
    
    async editUser(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const updates = req.body;
            const updatedUser = await civilUserService.editUser(id, updates);
            res.status(200).json(updatedUser);
        } catch (error: any) {
            res.status(400).json({ error: error.message });
        }
    }

    async editAdmin(req: any, res: any): Promise<void> {
        try {
            const userId = req.params.id;
            const updates = req.body;
    
            const updatedAdmin = await civilUserService.editAdmin(userId, updates);
            res.status(200).json(updatedAdmin);
        } catch (error: any) {
            res.status(400).json({ error: error.message });
        }
    }
    
    
}
