import React from "react";
import SearchBar from "./SearchBar";
import ProfileControl from "./ProfileControl";
import genericsLogo from "../../Img/gg-logo.png";

export default function Header() {
    return(
        <header>
            <div className="head-content">
                <h1>
                    <a 
                    href="reload"
                    className="logo-title">
                        <span className="gamer-color">Gamer </span>
                        <span className="generics-color">Generics</span>
                    </a>

                    <a href="reload">
                        <img 
                        src={genericsLogo}
                        className="logo-image"/>
                    </a>
                </h1>
            </div>
            <SearchBar />
            <ProfileControl />
        </header>
    )
}