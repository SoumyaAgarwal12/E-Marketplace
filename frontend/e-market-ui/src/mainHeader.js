import './App.css';
import React from 'react';
import { Link } from 'react-router-dom';

const MainHeader = ()=>{     // Function name must be in capital to use in App.js main file. 
    return (
        <div>
            {/* <h1>Hello from Components</h1> */}
            <ul className='headerList'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/products">Products</Link></li>
                <li className='signup'><Link to="/signup">SignUp</Link></li>
            </ul>
        </div>
    );
}



export default MainHeader;