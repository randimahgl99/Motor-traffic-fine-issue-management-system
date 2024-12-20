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
exports.CivilUserService = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const CivilUser_1 = __importDefault(require("../Model/CivilUser"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class CivilUserService {
    registerUser(name, email, password) {
        return __awaiter(this, void 0, void 0, function* () {
            const hashedPassword = yield bcryptjs_1.default.hash(password, 10);
            const newUser = new CivilUser_1.default({
                name,
                email,
                password: hashedPassword,
            });
            return yield newUser.save();
        });
    }
    loginUser(email, password) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield CivilUser_1.default.findOne({ email });
            if (!user) {
                throw new Error("User not found");
            }
            const isPasswordValid = yield bcryptjs_1.default.compare(password, user.password);
            if (!isPasswordValid) {
                throw new Error("Invalid credentials");
            }
            const token = jsonwebtoken_1.default.sign({ id: user._id, email: user.email }, process.env.JWT_SECRET || "default_secret", {
                expiresIn: "1h",
            });
            return token;
        });
    }
}
exports.CivilUserService = CivilUserService;
