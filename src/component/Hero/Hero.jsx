import { FaArrowRightLong } from "react-icons/fa6";
import hero_img from '../Assets/hero_image.png'
import './Hero.css'
const Hero = () => {
    return (
        <div className="hero_section">
            <div className="hero">

                <div className="hero_left">
                    <h3>New <span>Fashion</span></h3>
                    <h1>New Collections for Everyone</h1>
                    <div className="global_btn">
                    <a className="btn">Latest Collection </a>
                    <i><FaArrowRightLong /></i>
                    </div>
                </div>

                <div className="hero_right">
                        <img src={hero_img} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Hero;