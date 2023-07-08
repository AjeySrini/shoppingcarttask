import './App.css';

import Header from './Layout/Header';
import Content from './Layout/Content';
import Footer from './Layout/footer';
import { useState } from 'react';


function App() {
  const [cartList, setCartList] = useState([]);
  // function to added to the cart list
  const addToCart = (item) => {
    setCartList([...cartList, item]);
  };
  // function to remove from the cart list
  const removeFromCart = (product) => {
    setCartList(cartList.filter((item) => item!== product));
  };
  
  return (
    <div className="App">
      <Header itemcount={cartList.length}/>
      <Content
      addToCart={addToCart}
      removeFromCart={removeFromCart}
      />
      <Footer/>
    </div>
  );
}

export default App;
