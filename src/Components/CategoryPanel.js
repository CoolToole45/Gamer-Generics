import React from "react";
import '../Styles/CategoryPanel.css';

export default function CategoryPanel() {
    return (
        <div className="tech-categories">
            <ul>
                <li>
                    <a href="reload">Desktop Computers</a>
                </li>
                <li>
                    <a href="reload">PC Components</a>
                </li>
                <li>
                    <a href="reload">Laptops</a>
                </li>
                <li>
                    <a href="reload">Consols</a>
                </li>
                <li>
                    <a href="reload">Mobile</a>
                </li>
                <li>
                    <a href="reload">TVs / Monitors</a>
                </li>
                <li>
                    <a href="reload">Accessories</a>
                </li>
            </ul>
        </div>
    )
}