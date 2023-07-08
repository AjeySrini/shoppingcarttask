import React , { useState } from "react";

const Itemcard =({name,price,saleprice,review,imageurl,addToCart,removeFromCart})=>{
   
    
    const [show, setShow] = useState(false);

    const cartitem = () => {
      if (show) {
        setShow(false);
        removeFromCart(name);
      } else {
        console.log("working");
        addToCart(name);
        setShow(true);
      }
    }
    
    return(<div>
                 
                        <div className="col mb-5">
                        <div className="card h-100">
                        
                            <img className="card-img-top" src={imageurl}   alt="/..."/>
                              
                                <div className="card-body p-4">
                                    <div className="text-center">
                                    
                        <h5 className="fw-bolder">{name}</h5>
                        {review === "true" ?<div><i class="fa-solid fa-star" style={{ "color": "#fff824" }}></i><i class="fa-solid fa-star" style={{ "color": "#fff824" }}></i><i class="fa-solid fa-star" style={{ "color": "#fff824" }}></i><i class="fa-solid fa-star" style={{ "color": "#fff824" }}></i><i class="fa-solid fa-star" style={{ "color": "#fff824" }}></i></div>
                                :<p></p>}
                                
                                        {saleprice!==price?<><span className="text-muted text-decoration-line-through">{price}</span><span>{saleprice}</span></>:<p>{price}</p>}
                                    </div>
                                </div>
                               
                                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                    {name==="Fancy Product"?<div className="text-center"><button className="btn btn-outline-dark mt-auto" >View options</button>
                                    </div>:<div className="text-center"><button className="btn btn-outline-dark mt-auto" onClick={() => cartitem()}>
                                     {show?"remove from cart":"Add To Cart"} </button>
                                    </div>}
                                </div>
                            </div>
                    </div>
                </div>  
                
            
                      );
                  }
                

export default Itemcard;