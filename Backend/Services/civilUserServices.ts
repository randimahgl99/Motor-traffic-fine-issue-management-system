import bcrypt from "bcryptjs";
import CivilUser, { ICivilUser } from "../Model/CivilUser";
import jwt from "jsonwebtoken";

export class CivilUserService {
    async registerUser(name: string, email: string, password: string): Promise<ICivilUser> {
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new CivilUser({
            name,
            email,
            password: hashedPassword,
            isAdmin: false,
        });

        return await newUser.save();
    }

    async loginUser(email: string, password: string): Promise<string | null> {
        const user = await CivilUser.findOne({ email });
        if (!user) {
            throw new Error("User not found");
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            throw new Error("Invalid credentials");
        }

        const token = jwt.sign({ id: user._id, email: user.email }, process.env.JWT_SECRET || "default_secret", {
            expiresIn: "1h",
        });

        return token;
    }
    async registerAdminUser(name: string, email: string, password: string): Promise<ICivilUser> {
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new CivilUser({
            name,
            email,
            password: hashedPassword,
            isAdmin: true,
        });

        return await newUser.save();
    }

}
