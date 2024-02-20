import './Offers.css'
import offer_img from '../Assets/exclusive_image.png'
const Offers = () => {
    return (
        <div className='container'>
           <div className='offer_container'>
           <div className="offer_left">
                <h1>Exclusive Offers For You</h1>
                <p>ONLY ON BEST SELLERS PRODUCTS</p>
                <div className="global_btn">
                    <a href="#">Check Now</a>
                </div>
            </div>
            <div className="offer_right">
                <img src={offer_img} alt="" />
            </div>
           </div>
        </div>
    );
};

export default Offers;