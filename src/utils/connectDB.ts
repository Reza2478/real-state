import mongoose from "mongoose";


async function connectDB(){
    console.log("Connecting to Data Base...")
    if(mongoose.connections[0].readyState) return;
    mongoose.set("strictQuery", false)
    await mongoose.connect(process.env.MONGO_URI!)
    console.log("connect to DB has been done!")
}

export default connectDB