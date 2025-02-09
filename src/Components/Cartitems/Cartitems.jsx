import React, { useContext } from "react";
import './Cartitems.css'
import { ShopContext } from "../../Context/ShopContext";
import remove_icon from '../Assets/cart_cross_icon.png'

const Cartitems = () => {
    const { all_product, cartItems, removeFromCart,getTotalCartAmount } = useContext(ShopContext);
console.log("here we fonf total:",getTotalCartAmount())
    return (
        <div className="cartitems">
            <div className="cartitems-format-main">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            <div>
                {all_product.map((e) => {
                    if (cartItems[e.id] > 0) {
                        return (
                            <div className="cartitem-format cartitems-format-main" key={e.id}>
                                <img src={e.image} alt="" className="carticon-product-icon"/>
                               <div className="b">
                               <p>{e.name}</p>
                               </div>
                                <div className="a">
                                <p>${e.new_price}</p>
                                </div>
                                <div className="quantity-container">
                                   <div className="c">
                                   <p>{cartItems[e.id]}</p>
                                   </div>
                                </div>
                               
                               <div className="d">
                               <p>${e.new_price * cartItems[e.id]}</p>
                               </div>
                                <div className="e">
                                <img className="carticondremove-icon" src={remove_icon} onClick={() => removeFromCart(e.id)} alt="" />
                                </div>
                            </div>
                        );
                    }
                    return null;
                })}

                <div className="cartitems-doun">
                    <div className="cartitems-total">
                        <h1>Cart Totals</h1>
                        <div>
                            <div className="cartitems-total-item">
                                <p>Subtatal</p>
                                <p>${getTotalCartAmount()}</p>
                                
                            </div>
                            <hr />
                            <div className="cartitems-total-item">
                                <p>Shipping Fee</p>
                                <p>Free</p>
                            </div>
                            <hr />
                            <div className="cartitems-total-item">
                                <h3>Total</h3>
                                <h3>${getTotalCartAmount()}</h3>
                            </div>
                        </div>
                        <button>PROCEED TO CHEKOUT</button>
                    </div>
                    <div className="cartitems-promocode">
                        <p>If you have a promo code, Enter it here</p>
                        <div className="cartitem-promobox">
                           <input type="text" placeholder="Promo code"/> <button>Sumbit</button>
                           
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cartitems;
