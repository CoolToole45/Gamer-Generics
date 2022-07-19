import React from "react";
import shopItems from "../itemData";
import '../Styles/ShopItems.css';

export default function ShopItemList() {
	return (
		<div>
			<h1 className="shop-item-title">✨SEE MORE OF OUR ITEMS!✨</h1>
			<div className="data-container">
				{shopItems.map((data, key) => {
					return (
						<div key={key}
						className="shop-item">
							<h1>{data.name}</h1>
							<img 
								src={data.imgSrc}
								alt="item-image"
							/>
							{data.soldOut && <span id="sold-out">SOLD OUT!</span>}
							<div className="shop-item-info">
								<span>{data.itemCategory}</span>
								<span id="price">{data.price}</span>
							</div>
						</div>
					);
				})}
				<button id="catalog-btn">LOAD  MORE</button>
			</div>
		</div>
	);
};