import './Navbar.css'
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png'
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
const Navbar = () => {
    const [active, setActive] = useState('shop');
    return (
        <div className='navbar'>
            <div className="navbar_logo">
                <img src={logo} alt="" />
                <p><span>F</span>ashion</p>
            </div>
            
            <ul className="nav_menu">
                <li onClick={()=>setActive('shop')} className={active === 'shop' ? 'activeLink' : ''}><NavLink to = '/'>Shop</NavLink></li>
                <li onClick={()=>setActive('man')} className={active === 'man' ? 'activeLink' : ''}><NavLink to = '/mens'>Man</NavLink></li>
                <li onClick={()=>setActive('woman')} className={active === 'woman' ? 'activeLink' : ''}><NavLink to = '/womens'>Women</NavLink></li>
                <li onClick={()=>setActive('kids')} className={active === 'kids' ? 'activeLink' : ''}><NavLink to = '/kids'>Kids</NavLink></li>
            </ul>
            <div className="nav_login_cart">
                <button><NavLink to = '/login'>Login</NavLink></button>
                <NavLink to = '/cart'><img src={cart_icon} alt="" /></NavLink>
                <div className="nav_cart_count">0</div>
            </div>
        </div>
    );
};

export default Navbar;