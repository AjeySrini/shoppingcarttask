import React from 'react';

import styles from './header.module.css';

const Header = ({ itemcount }) => {
    return (
      <div class={styles.header}>
        
        <h3 ><b>Start Bootstrap</b></h3>
       
          <h6> Home</h6>
          <h6> About</h6>
          <h6> Shop</h6>
      
        <button class={styles.cart} >
        <i class="fa-sharp fa-solid fa-cart-shopping"></i>
          <span class={styles.cart}>Cart</span>
          ({itemcount})
        </button>
      
      </div>
    );
  }
  
  export default Header;