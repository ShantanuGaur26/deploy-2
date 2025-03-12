import express from "express";
import cors from "cors";

const app = express();
app.use(cors({
    origin : "https://deploy-fe-delta.vercel.app",
    methods : ["POST","GET"],
    credentials : true
}));
app.use(express.json());

app.get("/",(req,res)=>{
    res.json({msg : "hello"});
})

app.listen(3000);