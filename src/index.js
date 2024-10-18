import dotenv from 'dotenv';
import connectDB from "./db/dbindex.js";

dotenv.config();
connectDB()
.then(()=>{
  app.listen(process.env.PORT || 9000, ()=>{
    console.log('SERVER IS RUNNING AT PORT: ${process.env.PORT}');

  })
})
.catch((err)=>{
  console.log('MONGODB CONNECTION FAILED', err);
})