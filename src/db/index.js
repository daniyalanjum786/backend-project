import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async ()=>{
    try{
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log(`MongoDB Connected, DB_HOST: ${connectionInstance.connection.host}`);
    }catch(error){
        console.log("MongoDB connection Error", error);
        process.exit(1)         // application currently jis process pay chal rahi hai. ye process uska reference rakha hai. or phir wahan se exit karwa daita hai, is mein code 1 use kiya hai or bhi different codes lag sakty hain.
    }
}


export default connectDB;