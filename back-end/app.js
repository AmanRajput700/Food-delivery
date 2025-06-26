
const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const connectDB = require('./db');
const ListingRestaurant = require('./models/listing')
const User = require('./models/user');
const methodOverride = require('method-override');
var cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');
const session = require('express-session');




app.use(cors({
  origin: 'http://localhost:5173',  
  credentials: true                 
}));
//body parser
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(methodOverride('_method'));
app.use(cookieParser());

app.use(session({
  secret: 'mySuperSecretKey',
  resave: false,
  saveUninitialized: true,
  cookie: {
    httpOnly: true,
    secure: false, // true in production (https)
    maxAge: 1000 * 60 * 60 * 24  // 1 day
  }
}));

//connect to database
connectDB();

//demodatafile here to save data



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

//Signup
app.post("/register", async (req, res) => {
    try {
        const { username, email, password, role } = req.body;

        // Check for existing email
        const existing = await User.findOne({ email });
        if (existing) return res.status(400).json({ message: 'Email already in use' });
           // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({
            username,
            email,
            password: hashedPassword,
            role // 'user' or 'admin' from frontend
        });

        await newUser.save();
        res.status(201).json({ message: 'User registered successfully' });
    } catch (err) {
        console.error('Registration error:', err.message);
        res.status(500).json({ message: 'Internal server error' });
    }
  });


//Login
app.post('/login',async (req,res)=>{
    
    try{
        const {username , password} = req.body;
      console.log("Received username:", {username});
    const user = await User.findOne({username});
    if (!user) return res.status(401).json({ error: "User not found" });


     const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ error: "Invalid password" });


     req.session.user = {
      id: user._id,
      username: user.username,
      role: user.role
    };

     res.json({ message: "Login successful", user: req.session.user });
  } catch (err) {
    res.status(500).json({ error: "Login error" });
  }
})

//logout
app.post('/logout', (req, res) => {
  req.session.destroy(err => {
    if (err) return res.status(500).json({ error: 'Logout failed' });
    res.clearCookie('connect.sid'); // clear session cookie
    res.json({ message: 'Logout successful' });
  });
});

//refresh 
app.get('/check-auth', (req, res) => {
  if (req.session.user) {
    res.json({ isLoggedIn: true, user: req.session.user });
  } else {
    res.json({ isLoggedIn: false });
  }
});

//Start server
app.listen(8080, () => {
    console.log('server listening on port 8080')
});



