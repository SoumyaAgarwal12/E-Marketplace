const express = require('express')
const app = express();
const cors = require('cors');

// For DB 
require("./config/db/connection");       // Made connection with DB
const User = require("./config/collections/user");     // Fetch 'Products' collection Model

app.use(express.json());  // For Post data we need to use this for taking request data
app.use(cors());

app.post("/register", async(req,resp)=>{
    // console.log(req.body)
    // resp.send(req.body)
    let user = new User(req.body);
    let result = await user.save();
    console.log(result)
    resp.send(result);
})

app.listen(9000);