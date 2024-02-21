import footer_logo from '../Assets/logo.png'
import instagram from '../Assets/instagram_icon.png'
import pinterest from '../Assets/pintester_icon.png'
import whatsapp from '../Assets/whatsapp_icon.png'
import './Footer.css'
const Footer = () => {
    return (
        <div className=" container footer_container">
            <div className="footer_logo">
                <img src={footer_logo} alt="" />
                <p><span>F</span>ashion</p>
            </div>
            <ul className="footer_menu">
                <li>Company</li>
                <li>Products</li>
                <li>Offers</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <div className="footer_icon">
                    <img src={pinterest} alt="" />
                    <img src={instagram} alt="" />
                    <img src={whatsapp} alt="" />
            </div>
            <div className="footer_copyright">
                <hr />
                <p>Copyright @2023-All Right Reversed</p>
            </div>
        </div>
    );
};

export default Footer;