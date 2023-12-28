require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const userRouter = require('./routes/userRouter');
const noteRouter = require("./routes/notesRouter");

const app = express();
app.use(express.json());
app.use(cors(
    {
        origin : ["https://vercel-test-one-eta-11.vercel.app/"],
        methods : ["POST","GET"],
        credentials : true
    }
));

//routes
app.get("/",(req,res)=>{
    res.send("Server running")
})
app.use('/users',userRouter);
app.use('/api/notes',noteRouter);

//listening on port
const PORT = process.env.PORT;
app.listen(PORT,()=>{
    console.log("Listening on port",PORT);
})

//connection to db
const URI = process.env.MONGODB_URL;
mongoose.connect(URI);