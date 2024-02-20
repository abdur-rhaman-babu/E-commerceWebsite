import './Navbar.css'
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png'
import { useState } from 'react';
const Navbar = () => {
    const [active, setActive] = useState('shop');
    return (
        <div className='navbar'>
            <div className="navbar_logo">
                <img src={logo} alt="" />
                <p><span>F</span>ashion</p>
            </div>
            <ul className="nav_menu">
                <li onClick={()=>setActive('shop')} className={active === 'shop' ? 'activeLink' : ''}>Shop</li>
                <li onClick={()=>setActive('man')} className={active === 'man' ? 'activeLink' : ''}>Man</li>
                <li onClick={()=>setActive('woman')} className={active === 'woman' ? 'activeLink' : ''}>Woman</li>
                <li onClick={()=>setActive('kids')} className={active === 'kids' ? 'activeLink' : ''}>Kids</li>
            </ul>
            <div className="nav_login_cart">
                <button>Login</button>
                <img src={cart_icon} alt="" />
                <div className="nav_cart_count">0</div>
            </div>
        </div>
    );
};

export default Navbar;