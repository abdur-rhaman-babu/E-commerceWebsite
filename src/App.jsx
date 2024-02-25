import Navbar from "./component/Navbar/Navbar";
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Shop from "./pages/Shop/Shop";
import ShopCategories from "./pages/ShopCategories/ShopCategories";
import Products from "./pages/Products/Products";
import LoginSignUp from "./pages/LoginSignUp/LoginSignUp";
import Cart from "./pages/Cart/Cart";
import Footer from "./component/Footer/Footer";
import man_banner from "./component/Assets/banner_mens.png"
import kid_banner from "./component/Assets/banner_kids.png"
import women_banner from "./component/Assets/banner_women.png"
import Notfound from "./pages/Notfound/Notfound";
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <div style={{minHeight:'100vh'}}>
      <Routes>
        <Route path="/" element = {<Shop/>}/>
        <Route path="/mens" element={<ShopCategories banner = {man_banner} category = 'men'/>}/>
        <Route path="/womens" element={<ShopCategories banner = {women_banner} category = 'women'/>}/>
        <Route path="/kids" element={<ShopCategories banner = {kid_banner} category = 'kid'/>}/>
        <Route path="/products" element = {<Products/>}>
            <Route path=":productId" element = {<Products/>}/>
        </Route>
        <Route path="/LoginSignUp" element = {<LoginSignUp/>}/>
        <Route path="/cart" element = {<Cart/>}/>
        <Route path="*" element={<Notfound />} />
      </Routes>
      </div>
      <Footer/>
      </BrowserRouter>
    </div>
  );
};

export default App;