const mongoose = require("mongoose");
const Restaurant = require("../models/restaurant");
const ListingItem = require("../models/listingitem");

//  Connect to DB
 mongoose.connect("mongodb+srv://urbaneats013:ZqVOdtqgEwIb0KUP@clusterone.d1yxr.mongodb.net/?retryWrites=true&w=majority&appName=ClusterOne")
   .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

async function seedMenuItems(kailash) {
  await ListingItem.deleteMany({ restaurantId: kailash._id });

 const menuItems = [
  {
    title: "Paneer Butter Masala",
    price: 220,
    rating_star: 4.5,
    rating_count: 540,
    description: "Creamy and rich paneer cubes simmered in a tomato-based buttery gravy.",
    image: "" // Add your image URL
  },
  {
    title: "Veg Biryani",
    price: 180,
    rating_star: 4.2,
    rating_count: 410,
    description: "Aromatic basmati rice cooked with mixed vegetables and Indian spices.",
    image: ""
  },
  {
    title: "Dal Tadka",
    price: 140,
    rating_star: 4.3,
    rating_count: 385,
    description: "Yellow dal cooked and tempered with ghee, garlic, and traditional spices.",
    image: ""
  },
  {
    title: "Kadhai Mushroom",
    price: 200,
    rating_star: 4.0,
    rating_count: 290,
    description: "Mushrooms sautéed with bell peppers and onions in a spiced Kadhai masala.",
    image: ""
  },
  {
    title: "Tandoori Roti (2 pcs)",
    price: 40,
    rating_star: 4.6,
    rating_count: 470,
    description: "Whole wheat rotis baked in a traditional tandoor oven.",
    image: ""
  },
  {
    title: "Jeera Rice",
    price: 110,
    rating_star: 4.1,
    rating_count: 320,
    description: "Basmati rice lightly fried with cumin seeds for a flavorful touch.",
    image: ""
  },
  {
    title: "Gulab Jamun (2 pcs)",
    price: 80,
    rating_star: 4.7,
    rating_count: 510,
    description: "Soft and spongy milk-solid balls soaked in rose-flavored sugar syrup.",
    image: ""
  }
];


  for (const item of menuItems) {
    await ListingItem.create({ ...item, restaurantId: kailash._id });
  }

  console.log("kailash menu seeded.");
  mongoose.connection.close();
}

//Then define this second
async function seedKailashMenu() {
  let kailash = await Restaurant.findOne({ name: "Kailash" });

  if (!kailash) {
    console.log("mcdonald's not found. Creating...");
    const newRest = new Restaurant({
      name: "Kailash",
      isFixedBrand: true,
    });
    await newRest.save();
    console.log("Created Kailash");
    return seedMenuItems(newRest);
  }
  return seedMenuItems(kailash);
  
}
    
seedKailashMenu();
