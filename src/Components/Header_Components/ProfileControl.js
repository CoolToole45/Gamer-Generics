import React from "react";
import UserIcon from '../../Img/icons8-test-account-64.png';
import SearchIcon from '../../Img/icons8-search.svg';

export default function ProfileControl() {
    return (
        <div className="profile-control">
            <div className="user-control">
                <img
                src={UserIcon}
                alt="user-icon"
                className="user-image"/>
                <div className="icon-action">
                    <span>My Account</span>
                    <div className="action-account">
                        <a href="home">Login</a>
                        <small> / </small>
                        <a href="home">Register</a>
                    </div>
                </div>
            </div>

            <div className="cart-control">
                <img
                src={UserIcon}
                alt="shopping-cart"
                className="cart-image"/>
                <div className="icon-action">
                    <span>My Cart</span>
                    <a href="home">View Cart</a>
                </div>
            </div>

            <div className="seach-control">
                <button id="search-toggle">
                    <img
                    src={SearchIcon}
                    alt="search-icon"
                    className="search-icon"/>
                </button>
            </div>
        </div>
    )
}