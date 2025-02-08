import axios from 'axios';
import NavBar from './Components/Navbar/NavBar';
import CardContainer from './Components/cards/cardContainer';
import Collection from './Components/collections/Collection';
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import Login from './Components/User/Login';
import { useState, useContext } from 'react';
import { LoginContext } from './contexts/loginContext';
import Footer from './Components/Footer/Footer';
import DineOut from './Order/DineOut'
import DrinksAndNightlife from './Order/DrinksAndNightlife'
import OrderOnline from './Order/OrderOnline'
import RoofTop from './CollectionCard/RoofTop';
import GreatCafes from './CollectionCard/GreatCafes';
import GujaratiDelicacies from './CollectionCard/GujaratiDelicacies';
import LocalFavourite from './CollectionCard/LocalFavourite';
import MainNav from './Components/Navbar/MainNav';
import Pizza from './Components/OrderOnline/ChildElement/Pizza';
import Burger from './Components/OrderOnline/ChildElement/Burger';
import Biryani from './Components/OrderOnline/ChildElement/Biryani';
import Thali from './Components/OrderOnline/ChildElement/Thali';
import Dosa from './Components/OrderOnline/ChildElement/Dosa';
import FriedRice from './Components/OrderOnline/ChildElement/FriedRice';
import Roll from './Components/OrderOnline/ChildElement/Roll';
import Paneer from './Components/OrderOnline/ChildElement/Paneer';
import VegMeals from './Components/OrderOnline/ChildElement/VegMeals';
import Cake from './Components/OrderOnline/ChildElement/Cake';
import Tablist from './Components/OrderOnline/Tablist';
import Inspiration from './Components/OrderOnline/Inspiration';
import Topbrands from './Components/OrderOnline/Topbrands';
import Resturants from './Components/OrderOnline/Resturants';
import Food from './Components/OrderOnline/Food';
import Resturant_page from './Pages/Resturant_page';


const apiCall = ()=>{
  axios.get("http:/localhost:8080")
  .then((data)=>{
    console.log("API calling");
    console.log({data});
  });
}

const router = createBrowserRouter(
  [
    {
      path:"/",
      element: <div>
                         
        <NavBar/>
        <CardContainer />
        <Collection />
        <Footer/>
      </div>
    },
    // {
    //   path:"/order-online",
    //   element:<div>
    //     <MainNav/>
    //     <OrderOnline/>
    //   </div>,
    // },
    {
      path:"/food",
      element:<div>
        <Food/>
      </div>,
      children:[
        {
          path:'order-online',
          element:<OrderOnline/>
          
        },
        {
          path:'dine-out',
          element:<DineOut/>
        }
      ]
    },

    // {
    //   path:"/dine-out",
    //   element:<div>
    //   <MainNav/>
    //   <DineOut/>
    // </div>
    // },
    {
      path:'pages/:id',
      element:<></>
    },
    {
      path:"/drinks-and-nightlife",
      element:<DrinksAndNightlife/>
    },
    {
      path:"/gujarati-delicacies",
      element:<GujaratiDelicacies/>
    },
    {
      path:"/great-cafes",
      element:<GreatCafes/>
    },
    {
      path:"/local-favourite",
      element:<LocalFavourite/>
    },
    {
      path:"/roof-top",
      element:<RoofTop/>
    },
    {
      path:"index/:id",
      element:<div>
        <MainNav/>
        
      </div>
    },
    {
      path:"/order-online/pizza",
      element:<Pizza/>
    },
    {
      path:"/order-online/burger",
      element:<Burger/>
    },
    {
      path:'/order-online/biryani',
      element:<Biryani/>
    },
    {
      path:'/order-online/thali',
      element:<Thali/>
    },
    {
      path:'/order-online/dosa',
      element:<Dosa/>
    },
    {
      path:'/order-online/fried-rice',
      element:<FriedRice/>
    },
    {
      path:'/order-online/roll',
      element:<Roll/>
    },
    {
      path:'/order-online/paneer',
      element:<Paneer/>
    },
    {
      path:'/order-online/veg-meals',
      element:<VegMeals/>
    },
    {
      path:'/order-online/cake',
      element:<Cake/>
    },
    {
      path:'food/order-online/resturants',
      element:<Resturant_page/>
    }
  ]
)

export default function App() {
  const {isOpen, setisOpen} = useContext(LoginContext);
  return (
    <div className="App">
        {isOpen && <Login />}
        <RouterProvider router={router}/>
    </div>
  );
}