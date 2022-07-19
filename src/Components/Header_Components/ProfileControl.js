import React from "react";
import '../../Styles/ProfileControl.css'
import UserIcon from '../../Img/icons8-test-account-64.png';
// import ShoppingCart from '../Img/icons8-cart-64.png';

export default function ProfileControl() {
    return (
        <div className="profile-control">
            <div className="user-control">
                <img
                src={UserIcon}
                alt="user-image"
                className="user-image"/>
                <div className="icon-action">
                    <span>My Account</span>
                    <div className="action-account">
                        <a href="#">Login</a>
                        <small> / </small>
                        <a href="#">Register</a>
                    </div>
                </div>
            </div>
            <div className="cart-control">
                {/* Second img is placeholder till I find a better icon */}
                <img
                src={UserIcon}
                alt="shopping-cart"
                className="cart-image"/>
                <div className="icon-action">
                    <span>My Cart</span>
                    <p>$TOTAL_PRICE$</p>
                </div>
            </div>
        </div>
    )
}