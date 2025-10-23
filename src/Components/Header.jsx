import React from 'react';
import { Link } from 'react-router';
import './Header.css'
const Header = () => {
    return (
        <div>
            <h3>This is header</h3>

            <nav>
                {/* <a href="/">Home</a>
                <a href="/mobiles">Mobiles</a>
                <a href="/laptops">Laptops</a> */}
                
                <Link to={"/"}>Home</Link>
                <Link to={"/mobiles"}>Mobiles</Link>
                <Link to={"/laptops"}>Laptops</Link>
                <Link to={"/"}>Home</Link>


            </nav>
        </div>
    );
};

export default Header;