import Navbar from "./component/Navbar/Navbar";
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Shop from "./pages/Shop/Shop";
import ShopCategories from "./pages/ShopCategories/ShopCategories";
import Products from "./pages/Products/Products";
import LoginSignUp from "./pages/LoginSignUp/LoginSignUp";
import Cart from "./pages/Cart/Cart";
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element = {<Shop/>}/>
        <Route path="/mens" element={<ShopCategories category = 'men'/>}/>
        <Route path="/womens" element={<ShopCategories category = 'women'/>}/>
        <Route path="/kids" element={<ShopCategories category = 'kid'/>}/>
        <Route path="/products" element = {<Products/>}>
            <Route path=":productId" element = {<Products/>}/>
        </Route>
        <Route path="/LoginSignUp" element = {<LoginSignUp/>}/>
        <Route path="/cart" element = {<Cart/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;