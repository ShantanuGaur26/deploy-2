import express from "express";
import cors from "cors";

const app = express();
app.use(cors({
    origin : "",
    methods : ["GET"],
    credentials : true
}));

app.get("/",(req,res)=>{
    res.send("hello");
})

app.listen(3000);