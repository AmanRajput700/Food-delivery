
const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const connectDB = require('./db');
const ListingRestaurant = require('./models/listing')
const methodOverride = require('method-override');
var cookieParser = require('cookie-parser')




app.use(cors());
//body parser
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(methodOverride('_method'));
app.use(cookieParser())

//connect to database
connectDB();

//demodatafile here to save data

//Start server
app.listen(8080, () => {
    console.log('server listening on port 8080')
});

app.get("/",(req,res)=>{
    res.send("Hello World");
})

app.get("/listings",async (req,res)=>{
    const listing = await ListingRestaurant.find();
    res.json(listing);
})



app.get("/:value", async (req, res) => {
    try {
        let value = req.params.value;
        const data = await ListingRestaurant.find({ item : { $regex: new RegExp(value, 'i') } });

        res.json(data);
    } catch (err) {
        res.status(500).json({ error: "Something went wrong!" });
    }
});


// app.get("*", (req, res) => {
//     res.sendFile(path.resolve(__dirname, "build", "index.html"));
//   });


