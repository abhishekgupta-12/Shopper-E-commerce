import React from "react";
import './DescriptionBox.css'
const DescriptionBox = () =>
{

    return(
        <div className="descriptionbox">
            <div className="descriptionbox-navigator">
              <div className="descriptionbox-nav-box">Description</div>  
              <div className="descriptionbox-nav-box fade">Reviews (122)</div>
            </div>
            <div className="descriptionbox-descrion">
                <p>
                Discover endless possibilities at [SHOPPER]. Explore a curated selection of fashion, electronics, household essentials, and more. Enjoy intuitive browsing, secure payments, and swift delivery. Shop with confidence and convenience today!
                </p>
            </div>
        </div>
    )
    
}

export default DescriptionBox