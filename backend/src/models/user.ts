import { Schema, model } from "mongoose";
import User from "../types/user";

const userSchema = new Schema<User>(
  {
    fullName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    addresses: { type: [{}], required: true },
    phoneNumber: { type: String, required: true },
  },
  { versionKey: false }
);
const UserModel = model("User", userSchema);

export default UserModel;
