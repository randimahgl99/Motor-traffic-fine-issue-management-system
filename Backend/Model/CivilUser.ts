import mongoose, { Schema, Document, Model } from "mongoose";
import validator from "validator";


export interface ICivilUser extends Document {
    name: string;
    email: string;
    password: string;
    isAdmin: boolean;
    idNumber?: string;
}

const civilUserSchema: Schema = new Schema<ICivilUser>({
    name: { type: String, required: true },
    email: { 
        type: String,
        required: [true, "Email is required"],
        unique: true,
        validate: {
            validator: (email: string) => validator.isEmail(email),
            message: "Invalid email address",
        },
    },
    password: { type: String, required: true },
    isAdmin :{type:Boolean, default: false},
    idNumber: { type: String, required: false },
});

const CivilUser: Model<ICivilUser> = mongoose.model<ICivilUser>("CivilUser", civilUserSchema);

export default CivilUser;
