import { Router } from "express";
import { CivilUserController } from "../Controllers/civilUserController";

const router = Router();
const civilUserController = new CivilUserController();



router.post("/auth/register", (req, res) => civilUserController.register(req, res));
router.post("/auth/login", (req, res) => civilUserController.login(req, res));
router.post("/auth/adminRegister", (req, res) => civilUserController.adminRegister(req, res));

export default router;
