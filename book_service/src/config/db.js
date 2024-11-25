const mongoose=require('mongoose')
const dotenv=require('dotenv')

dotenv.config()
const DB_URI=process.env.MONGO_URL;

const connectDB=async ()=>{
    try {
        await mongoose.connect(DB_URI,{
            useNewUrlParser:true,
            useUnifiedTopology:true
        });
        console.log("Connected to DB");
    } catch (error) {
        console.log(error);
        process.exit(1);    
    }
}

module.exports=connectDB;