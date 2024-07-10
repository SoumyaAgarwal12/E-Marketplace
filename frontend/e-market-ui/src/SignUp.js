import React from 'react';

const SignUp = ()=>{
    return (
        <div className='signUpForm'>
            <h2>SignUp Form</h2>
            <input type="email" placeholder='Enter Your Email Id'></input>
            <input type="password" placeholder='Password'></input>
            <button type='button'>Sign Up</button>
        </div>
    );
}

export default SignUp;