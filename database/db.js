import mongoose from 'mongoose';
import "dotenv/config"
export const connectDB = async () =>{
try{
await mongoose.connect(process.env.MONGODB_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
console.log("Db connected")
}catch(error){
    console.log("Database connection failed");
}
}