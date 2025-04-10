
import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  phoneNumber: Number,
  password: String,
  Gender: String,
  isActive: Boolean,
});

const User = mongoose.model("User", UserSchema);

export default User;


