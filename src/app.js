import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";



const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}));

app.use(express.json({limit: "16kb"}));        // to limit the data not greater than 16kb
app.use(express.urlencoded({extended:true})); // you can also leave empty urlencoded without object
app.use(express.static("public"));
app.use(cookieParser());                   // to access and set cookies from server to the user's browser


// new info => (req, res) => (err,req,res,next) => next is flag to pass to next middleware



export { app }
