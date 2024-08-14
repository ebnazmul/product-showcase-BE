const express = require('express');
const cors = require('cors')
const app = express()
const port = process.env.PORT || 3000;


// middlewires
app.use(cors())
app.use(express.json())


app.get('/', (req, res)=>{
    res.send("Hello")
})


app.listen(port, ()=>{
    console.log("running at ", port);
})
