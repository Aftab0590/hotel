import User from "../database/models/userModel.js";
import bcrypt from "bcryptjs";
import { userSignUpService, userLoginService, deleteUserService } from "../service/userService.js";
import { updatedUserService } from "../service/userService.js";
import jwt from "jsonwebtoken";

//create an  user....
export const signup = async (req, res) => {
  try {
    const { name, email, password, phoneNumber, gender, isActive } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    await userSignUpService({
      name,
      email,
      password: hashedPassword,
      phoneNumber,
      gender,
      isActive,
    });

    res.status(200).json({ message: "User signed up successfully !!!" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Interval server error" });
  }
}

//login an user.....



 export const login = async (req,res)=>{
    try{
        const {email,password} =req.body;
const user = await User.findOne({email});
        
        if(!user){
          return  res.status(404).json({message:"User not found !!!"});
         
        }
        const isMatch = await bcrypt.genSalt(password,user.password);
        if(!isMatch) return res.status(400).json({message:"User email or password is incorrect!!!"});
        const token = jwt.sign({
            userId:user.id,
            email:email
        },
        process.env.JWT_SECRECT,
        {expiresIn:"1h"}
      )

        return  res.status(201).json({message:"User logged in !!!",token});

    }catch(error){
        console.log(error);
        res.send(error);
    }
 };
//Update  an user profile....
 export const updateUserProfile= async (req,res)=>{
  try {
    const updatedData= req.body;
    const  isUpdated=await updatedUserService(updatedData);
    if(isUpdated){
      res.status(200).json({ message: "User profile updated successfully !!!" });
    }
    
    else{
      
      res.status(400).json({ message: "Error updating User profile !!!" });
     }
     
    
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Interval server error" });
  }
    
  }

  // Delete an user....
  export const deleteUser= async (req,res)=>{
    try {
      const deleteData=req.body;
      const isDeleted=await deleteUserService(deleteData);
      res.status(200).json({message:"User deleted succesfully!!!!!"});
    } catch (error) {
      console.log(error);
      res.status(500).json({message:"Error deleting User!!!!"});
    }
  }
 


