const express = require('express');
const app = express();

require('dotenv').config()
const PORT = process.env.PORT;

const list = [
    {
        id: 1,
        name: "burak"
    }
]

app.get("/api",(req,res)=>{
    res.status(200).send(list)
    console.log(list)
})

console.log(list);
app.listen(PORT,() => {
    console.log(`server ${PORT} nolu porttan hizmette`)
})