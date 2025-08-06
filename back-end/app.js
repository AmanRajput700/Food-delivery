
const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const connectDB = require('./db');
const Restaurant = require('./models/restaurant');
const ListingItem = require('./models/listingitem')
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

//Add restaurants
app.post('/api/restaurants', async (req, res) => {
  try {
    const newRestaurant = new Restaurant(req.body);
    await newRestaurant.save();
    res.status(201).json(newRestaurant);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

//listing restaurants
app.get('/api/restaurants',async(req,res)=>{
  try{
    const restaurants = await Restaurant.find({});
    res.json(restaurants);
  }catch{
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
})

app.get("/api/restaurants/:id", async (req, res) => {
  const restaurant = await Restaurant.findById(req.params.id);
  const menuItems = await ListingItem.find({ restaurantId: restaurant._id });
  res.json({ restaurant, menuItems });
});

//show menu of specific restaurnt
app.get('/restaurants/:id', async (req, res) => {
  try {
    const restaurant = await Restaurant.findById(req.params.id);

    if (!restaurant) {
      return res.status(404).json({ message: 'Restaurant not found' });
    }

    const menuItems = await ListingItem.find({ restaurant: restaurant._id });

    res.json({ restaurant, menuItems });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

// for edit restaurants
app.get("/myrestaurants/:userId", async (req, res) => {
  const { userId } = req.params;
  try {
    const restaurants = await Restaurant.find({ userId });
    res.json(restaurants);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

app.get("/:value", async (req, res) => {
    try {
        let value = req.params.value;
        const data = await Restaurant.find({ knownFor : { $regex: new RegExp(value, 'i') } });

        res.json(data);
    } catch (err) {
        res.status(500).json({ error: "Something went wrong!" });
    }
});




//Start server
app.listen(8080, () => {
    console.log('server listening on port 8080')
});



