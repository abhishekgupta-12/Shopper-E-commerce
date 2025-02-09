import React, { useContext } from "react";
import {ShopContext} from '../Context/ShopContext'
import { useParams } from "react-router-dom";
import Breadcrum from "../Components/Breadcrums/Breadcrum";
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay'
import DescriptionBox from "../Components/DescriptionBox/DescriptionBox";
import RelatedProducts from "../Components/RelatedProducts/RelatedProducts";

const Product = () =>
{
const {all_product}=useContext(ShopContext)
const {productId}=useParams();
//console.log('product id',productId);
const product = all_product.filter((e)=>e.id===Number(productId))
console.log('single product',product);
    return(

        <div> 
            <Breadcrum product={product}/>
            <ProductDisplay product={product}/>
            <DescriptionBox></DescriptionBox>
           <RelatedProducts></RelatedProducts>
        </div>
    )
    
}

export default Product