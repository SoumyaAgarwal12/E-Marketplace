import './App.css';
import React from 'react';

const MainHeader = ()=>{     // Function name must be in capital to use in App.js main file. 
    return (
        <div>
            {/* <h1>Hello from Components</h1> */}
            <ul className='headerList'>
                <ul>Home</ul>
                <ul>About</ul>
                <ul>Contact</ul>
                <ul>Logout</ul>
            </ul>
        </div>
    );
}



export default MainHeader;