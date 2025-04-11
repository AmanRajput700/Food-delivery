const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    image:{
        type:String,
        default:"https://b.zmtcdn.com/data/pictures/8/20041278/33d86bcffc824ed629089afa69c72515_o2_featured_v2.jpg",
        set: (v)=>v===""?"https://b.zmtcdn.com/data/pictures/8/20041278/33d86bcffc824ed629089afa69c72515_o2_featured_v2.jpg":v,
    },
    price:{
        type:Number,
        required:true,
    },
    rating:{
        type:Number,
        min:0,
        max:5
    },
    category:{
        type:String,
        required:true,
    },
    item:{
        type:String,
    }
})

const ListingRestaurant = mongoose.model("ListingRestaurant",listingSchema);
module.exports = ListingRestaurant;

