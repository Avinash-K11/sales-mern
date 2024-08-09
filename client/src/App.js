import React, { createContext, useReducer } from "react";
import { Routes, Route } from 'react-router-dom';

import './App.css';

import Navbar from "./componets/Navbar/Navbar.js";
import Banner from "./componets/Banner/Banner.js";
import Footer from "./componets/Footer/Footer.js";
import ProductItem from "./componets/ProductItem/ProductItem.js";
import Contact from "./componets/Contact/Contact.js";
import About from "./componets/About/About.js";
import SignUp from './componets/SignUp/SignUp.js';
import LogIn from './componets/LogIn/LogIn.js';
import LogOut from './componets/LogOut.js'
import { reducer, initialState } from './reducer/useReducer.js';

import Oats from './images/Oats-Milk.jpg';
import nuttela from './images/Nutella.jpg';
import jam from './images/jam.jpg'
import vitality from './images/vitality-shot.jpg';

import gummies from './images/gummies.jpg';
import juice from './images/juice.jpg';
import sauce from './images/sauce.jpg';
import doritos from './images/doritos.jpg';

const dealList = [{
    id: 1,
    imageUrl: Oats,
    name: 'Basrista Series Oat',
    brand: 'Pacific Foods',
    price: 500
  },
  {
    id: 2,
    imageUrl: nuttela,
    name: 'Nutella Hazelnut Spead',
    brand: 'Nutella',
    price: 750
  },
  {
    id: 3,
    imageUrl: jam,
    name: 'Jersey Jam',
    brand: 'Red Stallion',
    price: 299
  },
  {
    id: 4,
    imageUrl: vitality,
    name: 'Vatality Shot',
    brand: 'Pressed',
    price: 15000
  },

];

const productList = [{
  id: 5,
  imageUrl: gummies,
  name: 'Gummies',
  brand: 'Kushque',
  price: 999
},
{
  id: 6,
  imageUrl: juice,
  name: 'Simply Red Juice',
  brand: 'Apple Tree',
  price: 750
},
{
  id: 7,
  imageUrl: sauce,
  name: 'Core & Grind Cashew Cheesy Sauce',
  brand: 'Core & Grind',
  price: 299
},
{
  id: 8,
  imageUrl: doritos,
  name: 'Dorritos Wasabi',
  brand: 'Dorritos',
  price: 15000
},

];

export const UserContext = createContext();

const App = () => {


  const onAddClicked = () => {

    if(state){
      return window.alert("Payment window!!");
    } else {
      return window.alert("Login to Buy!!");
    }
  };

  const [ state, dispatch ] = useReducer(reducer, initialState);

  return (

    <div className="app" >
      <UserContext.Provider value={{state, dispatch}}>
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Banner />
              <div className="products-section">
                <h2 className="title">Deals Of The Day</h2>
                <ul className="products-row-list">
                  {dealList.map((eachObj)=> 
                    <ProductItem product={eachObj} key={eachObj.id} 
                    onAddClicked={onAddClicked} />
                  )}
                </ul>
              </div>
              <Footer />
            </>
          } >             
          </Route>

          <Route path="/products" element={
              <>
                <div className="products-section">
                <h2 className="title">Deals Of The Day</h2>
                <ul className="products-row-list">
                  {dealList.map((eachObj)=> 
                    <ProductItem product={eachObj} key={eachObj.id} 
                    onAddClicked={onAddClicked} />
                  )}
                </ul>
              </div>

              <div className="products-section">
              <h2 className="title">All Products</h2>
                <ul className="products-row-list">
                  {productList.map((eachObj)=> 
                    <ProductItem product={eachObj} key={eachObj.id} />
                  )}
                </ul>
              </div>
              <Footer />
              </>
          } >             
          </Route>

          <Route path="/signup" element={
              <><SignUp /> <Footer /></>
          } >     
          </Route>        

          <Route path="/login" element={
              <><LogIn /> <Footer /></>
          } >     
          </Route>     

          <Route path="/about" element={
              <><About /> <Footer /></>
          } >             
          </Route>

          <Route path="/contact" element={
              <><Contact /><Footer /></>
          } >             
          </Route>

          <Route path="/logout" element={
              <><LogOut /></>
          } >             
          </Route>
        </Routes>
        </UserContext.Provider>
    </div>
    
  );
}


export default App;
