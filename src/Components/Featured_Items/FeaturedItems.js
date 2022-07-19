import React from "react";
import '../../Styles/FeaturedItems.css';
import FeaturedSlider from "./FeaturedSlider";
import PopularItems from "./PopularItems";
import DiscountItems from "./DiscountItems";
import 'react-slideshow-image/dist/styles.css';


export default function FeaturedItems() {
    return (
        // Container for new/popular items
        <div className="new-and-popular">
            <div className="new-items">
                <div className="featured-title new-item-slider-title">
                    <p>CHECK OUT OUR BRAND NEW ITEMS!</p>
                </div>
                <div className="
                new-item-slider
                featured-item-border">
                    <FeaturedSlider />
                </div>
            </div>

            <div className="popular-items">
                <div className="featured-title popular-items-title">
                    <p>HAVE A LOOK AT OUR MOST POPULAR ITEMS 😎</p>
                </div>
                <PopularItems />
            </div>

            <div className="discounted-items">
                <div className="featured-title disc-items-title">
                    <p>🔥 CHECK OUT THESE DISCOUNTS 🔥</p>
                </div>
                <DiscountItems />
            </div>
        </div>
    )
}