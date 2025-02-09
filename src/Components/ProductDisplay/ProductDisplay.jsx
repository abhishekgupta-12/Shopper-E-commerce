import React, { useContext } from "react";
import './ProductDisplay.css'
import star_icon from '../Assets/star_icon.png'
import star_dull_icon from '../Assets/star_dull_icon.png'
import { ShopContext } from "../../Context/ShopContext";
const ProductDisplay = (props) => {
    const { product } = props;
    const {addToCart}=useContext(ShopContext);
    return (
        product.map((item) =>
        (
            <div>
                <div className="productdisplay">
                    <div className="productdisplay-left">
                        
                        <div className="product-display-img-list">
                        <img src={item.image} alt="" />
                        <img src={item.image} alt="" />
                        <img src={item.image} alt="" />
                        <img src={item.image} alt="" />
                        </div>
                    </div>
                    <div className="productdisplay-img">
                        <img className="productdisplay-main-img" src={item.image} alt="" />
                    </div>
                    <div className="productdisplay-right">
                    <h1>{item.name}</h1> 
                    </div>
                    <div className="productdisplay-right-star">
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_dull_icon} alt="" />
                    <p>(122)</p>
                </div>

                <div className="productdisplay-right-prices">
                <div className="productdisplay-right-price-old">
                    <p>{item.old_price}</p>
                </div>
                <div className="productdisplay-right-price-new">
                <p>{item.new_price}</p>
                </div>
                </div>

                <div className="productdisplay-right-description">
                For ultimate comfort, choose soft fabrics like fleece or modal. For warmth and durability, natural fibers like cotton or linen are great.
                </div>
                    <div className="abhi">
                    <div className="productdisplay-right-size">
                        <div>S</div>
                        <div>M</div>
                        <div>L</div>
                        <div>XL</div>
                        <div>XXL</div>
                    </div>
                    </div>
                    <div>
                  <button onClick={() => addToCart(item.id)}>ADD TO CART</button>
                    </div>
                </div>
            </div>
        ))

    )

}


export default ProductDisplay