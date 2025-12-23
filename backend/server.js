import express from 'express';
import {connector } from "./db.js";
import dotenv from "dotenv";

dotenv.config();


const app=express();

connector();

app.get("/api/shahmas",(req,res)=>{
    res.send("hi this is the information you are getting");
});


app.listen(6003,()=>{
    console.log("server is running on port 6003");
});











 