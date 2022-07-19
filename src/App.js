import React from "react";
import './Styles/App.css';
import Header from "./Components/Header_Components/Header";
import ShopItemList from './Components/ShopItems';
import CategoryPanel from "./Components/CategoryPanel";
import FeaturedItems from "./Components/Featured_Items/FeaturedItems";
import Footer from "./Components/Footer";

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
