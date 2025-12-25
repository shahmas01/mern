import express from 'express';
import {connector } from "./db.js";
import dotenv from "dotenv";
import{Note} from "./models/Note.js";

dotenv.config();


const app=express();

app.use(express.json());

connector();

//
app.post("/api/notes",async(req,res)=>{
    try{
const {title,content}=req.body;
if(!title || !content){
    return res.status(400).json({message:"title and content are required"});
    }
    const note=await Note.create({title,content});
    res.status(201).json(note);
}
    catch (error) {
        res.status(500).json({error:error.message});
    }
});


app.get("/api/notes",async(req,res)=>{
    try{
        const notes=await Note.find();
        res.json(notes);
    }catch (error) {
        res.status(500).json({error:error.message});
    }
});





// controller for updating a note
app.put("/api/notes/:id", async (req, res) => {
  try {
    const updatedNote = await Note.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!updatedNote) {
      return res.status(404).json({ message: "Note not found" });
    }

    res.json(updatedNote);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// controller for deleting a 

app.delete("/api/notes/:id",async(req,res)=>{
    try{
        const deletedNote=await Note.findByIdAndDelete(req.params.id);
        if(!deletedNote){
            return res.status(404).json({message:"note not found"});
        }
        res.json({message:"note deleted successfully"});
    }catch (err) {
        res.status(500).json({error:err.message});
    }
});

app.listen(6005,()=>{
    console.log("server is running on port 6005");
});











 