import React from "react";

import itemsList from './listofitem.json';
import Itemcard from "../component/itemslist";


const Content = ({addToCart, removeFromCart}) => {


    return (
        <><div style={{
            backgroundColor: "black"
        }}>
            <div style={{
                height: "250px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column"
            }}>
                <h1 style={{
                    color: "white",
                    fontSize: "50px",
                    fontWeight: "bold"
                }}>
                    Shop in style
                </h1>
                <p style={{
                    color: "white",
                    fontSize: "17px",
                    fontWeight: "bold"
                }}>with this shop homepage template</p>
            </div>
        </div>
            <div className="container px-4 px-lg-5 mt-5">
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">

                    {itemsList.map((item) => (
                        <Itemcard
                            name={item.name}
                            price={item.price}
                            saleprice={item.saleprice}
                            review={item.revivewStars}
                            imageurl={item.image}
                            key={item.id}
                            addToCart={addToCart}
                            removeFromCart={removeFromCart}
                        />))}
                </div>
            </div>

        </>


    );
}

export default Content;