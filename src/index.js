// require('dotenv').config({path:'./env'});
import dotenv from "dotenv";

import connectDB from "./db/index.js";
import { app  } from "./app.js";


dotenv.config({
    path: "./env"
});

connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000, ()=>{
        console.log(`Server is Running at Port: ${process.env.PORT}`);
    });
})
.catch((err)=>{
    console.log("MonogDB connection failed", err);
});




/* // ; semi color for avoiding errors due to previous another iffi function
;(async()=>{
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        app.on("Error", (error)=>{
            console.log("Error: ", error);
            throw error;
        });
        app.listen(process.env.PORT, ()=>{
            console.log(`App is listening on port: ${process.env.PORT}`);
        });
    }catch (error){
        console.log("Error: ", error);
        throw error;
    }
})() */