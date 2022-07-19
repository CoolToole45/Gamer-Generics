import React from "react";
import '../../Styles/SearchBar.css';
import { searchCategories } from "./HeaderDB/searchCategories";

export default function SearchBar() {
	return (
		<div className="search-bar">
			<div className="select-dropdown">
				<select>
					{searchCategories.map((data, key) => {
						return (
							<option key={key}>{data.category}</option>
						);
					})}
				</select>
			</div>
				<input 
					type="text"
					maxLength="73"/>
				<div className="list-box-container">
					<ul className="list-box">			
					</ul>
				</div>
		</div>
	)
}