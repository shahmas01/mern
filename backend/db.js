import mongoose from 'mongoose';

export const connector = async () => {
    try {
       await mongoose.connect(process.env.MONGO_URI);
        console.log("successfully connected to mongo db");
    }catch (error) {
        console.log("error connecting to mongo db",error);
    }
}