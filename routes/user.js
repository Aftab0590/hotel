import express from 'express';
import {deleteUser, signup, updateUserProfile} from "../controller/user.js"
import { login } from '../controller/user.js';
const router = express.Router();

router.post("/signup", signup);
router.post("/login",login);
router.put("/updatedProfile",updateUserProfile)
router.delete("/delete",deleteUser)


export default router;
