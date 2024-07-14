const express = require('express')
const app = express();
const cors = require('cors');

app.use(express.json());  // For Post data we need to use this for taking request data
app.use(cors());

app.post("/register",(req,resp)=>{
    console.log(req.body)
    resp.send(req.body)
    // resp.send("Registered From Post")
})

app.listen(9000);