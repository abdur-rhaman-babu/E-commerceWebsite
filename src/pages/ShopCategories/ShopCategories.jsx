/* eslint-disable react/prop-types */
import { IoChevronDownOutline } from "react-icons/io5";
import { useContext } from "react";
import { shopContext } from "../../Context/Shopcontext";
import Items from "../../component/Items/Items";
import './ShopCategories.css'
const ShopCategories = ({banner,category}) => {
     const products = useContext(shopContext);
  
    return (
        <div className="container shop_category">
            <div className="shop_banner">
            <img src={banner} alt="" />
            </div>
            <div className="sort_category">
                <p><span>Showing 1-12 </span>out of 36</p>
                <div className="sort_by">
                    <p>Sort By <IoChevronDownOutline /></p>
                </div>
            </div>
            <div className="categories">
                    {
                        products && products.map((product)=>{
                            if(category === product.category){
                                return <Items key={product.id} data = {product}/>
                            }else{
                                return null
                            }
                        })
                    }
            </div>
            <div className="explore_now">
                <p>Explore Now</p>
            </div>
        </div>
    );
};

export default ShopCategories;