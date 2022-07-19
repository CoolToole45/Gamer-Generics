import React from "react";
import '../../Styles/FeaturedItems.css';
import popItemData from "./FeaturedDB/popItemData";

export default function PopularItems() {
    return (
        <div className="popular-items-display">
            {popItemData.map((data, key) => {
                return(
                    <div key={key}
                    className="pop-item featured-item-border">
                        <div className="pop-item-img">
                            <img 
                            src={data.imgUrl}
                            alt="pop-item-img"/>
                        </div>
                        <div className="pop-item-name">
                            <span>{data.itemName}</span>
                        </div>     
                    </div>
                )
            })}
        </div>
    );
}