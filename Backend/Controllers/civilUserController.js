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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CivilUserController = void 0;
const civilUserServices_1 = require("../Services/civilUserServices");
const civilUserService = new civilUserServices_1.CivilUserService();
class CivilUserController {
    register(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { name, email, password } = req.body;
                const newUser = yield civilUserService.registerUser(name, email, password);
                res.status(201).json({
                    success: true,
                    message: "User registered successfully",
                    user: { id: newUser._id, name: newUser.name, email: newUser.email },
                });
            }
            catch (error) {
                res.status(400).json({ success: false, message: error.message });
            }
        });
    }
    login(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { email, password } = req.body;
                const token = yield civilUserService.loginUser(email, password);
                res.status(200).json({
                    success: true,
                    message: "Login successful",
                    token,
                });
            }
            catch (error) {
                res.status(400).json({ success: false, message: error.message });
            }
        });
    }
    adminRegister(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { name, email, password } = req.body;
                const newUser = yield civilUserService.registerAdminUser(name, email, password);
                res.status(201).json({
                    success: true,
                    message: "User registered successfully",
                    user: { id: newUser._id, name: newUser.name, email: newUser.email },
                });
            }
            catch (error) {
                res.status(400).json({ success: false, message: error.message });
            }
        });
    }
}
exports.CivilUserController = CivilUserController;
