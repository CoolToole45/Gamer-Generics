import React from "react";
import "./Styles/App.css";

// Header Comp and all its styles/sub-comp styles
import Header from "./Components/Header_Components/Header";
import "./Styles/Header.css";
import "./Styles/SearchBar.css";
import "./Styles/ProfileControl.css";

import ShopItemList from "./Components/ShopItems";
import "./Styles/ShopItems.css";

import CategoryPanel from "./Components/CategoryPanel";
import "./Styles/CategoryPanel.css";


import FeaturedItems from "./Components/Featured_Items/FeaturedItems";
import "./Styles/FeaturedItems.css";

import Footer from "./Components/Footer";
import "./Styles/Footer.css";

function App() {
  return (
    <div className="App">
      <Header /> 
      <section>
        <CategoryPanel />
      </section>
      <section>
        <FeaturedItems />
      </section>
      <section>
        <ShopItemList />
      </section>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;