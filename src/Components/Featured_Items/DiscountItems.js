import React from "react";
import discountItemData from "./FeaturedDB/discountItemData";

export default function DiscountItems() {
    return (
        <div className="discounted-items-display">
            {discountItemData.map((data, key) => {
                return(
                    <div key={key}
                    className="disc-item featured-item-border">
                        <div className="disc-item-img">
                            <img 
                            src={data.imgUrl}
                            alt="disc-item-img"/>
                        </div>
                        <div className="disc-item-info">
                            <span>{data.itemName}</span>
                            <span>{data.itemPrice}</span>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}