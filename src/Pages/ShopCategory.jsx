//import React, { useContext } from "react";
import './CSS/ShopCategory.css'
//import { ShopContext } from "../Context/ShopContext";
import dropdown_icon from '../Components/Assets/dropdown_icon.png'
import Item from "../Components/Item/Item";
import all_product from "../Components/Assets/all_product";
const ShopCategory = (props) => {
    //console.log(props.category);
    //const { all_product } = useContext(ShopContext)
    return (
        <div className="shop-category">
            <img className="shopcategory-banner" src={props.banner} alt="" />
            <div className="shopcategory-indexSort">
                <p>
                    <span>Showing 1-12</span> out of 36 products
                </p>
                <div className="shopcategory-sort">
                    Sort by <img src={dropdown_icon} alt="" />
                </div>
            </div>
            <div className="shopcategory-products">
                {
                    
                all_product.map((item, i) => {
                    let count=0;
                    //console.log(props.category);
                    
                   if(props.category===item.category)
                   {
                    count++;
                    console.log(count,'hi');
                    return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}></Item>
                   }
                   else
                   {
                    return null
                    
                   }
                   
                })
                }
            </div>
            <div className="shopcategory-loadmore">
                Explor More
            </div>
        </div>

    )
}

export default ShopCategory  