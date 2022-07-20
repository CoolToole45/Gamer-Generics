import React from "react";
import SimpleImageSlider from "react-simple-image-slider";


const slideImages = [
    { url: "https://picsum.photos/1500/500"},
    { url: "https://picsum.photos/1500/500"},
    { url: "https://picsum.photos/1500/500"},
    { url: "https://picsum.photos/1500/500"}
]

export default function FeaturedSlider() {
    return (
        <div>
            <SimpleImageSlider 
            width="85vw"
            height={500}
            images={slideImages}
            showBullets={true}
            showNavs={true}
            navStyle={2}
            loop={true}
            autoPlay={true}
            autoPlayDelay={4}/>
        </div>
    )
}