import mongoose from "mongoose";
import app from "./app";
const port = 5000
async function main() {
    try{
        
        await mongoose.connect('mongodb+srv://movieCollection:movieCollection@cluster0.haioro2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');

        app.listen(port, () => {
        console.log(`Example app listening on port ${port}`)
      })

    } 
    catch(error){
     console.log(error);
    }
    
  }

  main()