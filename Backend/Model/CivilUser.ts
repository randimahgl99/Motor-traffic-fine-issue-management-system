import mongoose, { Schema, Document } from "mongoose";

export interface ICivilUser extends Document {
    name: string;
    email: string;
    password: string;
}

const civilUserSchema: Schema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isAdmin :{type:Boolean, required: true},
});

const CivilUser = mongoose.model<ICivilUser>("CivilUser", civilUserSchema);

export default CivilUser;
