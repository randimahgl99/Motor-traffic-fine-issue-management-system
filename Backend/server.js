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
//import { CivilUserController } from "./Controllers/civilUserController";
const userRoute_1 = __importDefault(require("./Routes/userRoute"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = 5000;
//const civilUserController = new CivilUserController();
app.use(express_1.default.json());
app.use("/auth", userRoute_1.default);
// app.post("/auth/register", (req, res) => civilUserController.register(req, res));
// app.post("/auth/login", (req, res) => civilUserController.login(req, res));
// app.post("/auth/adminRegister", (req, res) => civilUserController.adminRegister(req, res));
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
