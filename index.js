const express = require('express');
const app = express();
const blog = require("./routes/blog");


require("dotenv").config;

const PORT = process.env.PORT || 4000;

// middleware 
app.use(express.json());

//mount 
app.use('/api/v1', blog);

const db = require("./config/database");
db();

app.listen(PORT, ()=>{
    console.log(`App is running on port no ${PORT}`)
})

app.get("/",(req,res)=>{
    res.send(`this is run port no ${PORT}`);
})
