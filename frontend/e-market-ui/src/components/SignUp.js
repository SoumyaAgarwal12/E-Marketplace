import React, { useState } from 'react';

const SignUp = ()=>{
    // const [testname, setTestName] = useState("Soumya")    // Default value for testname is "Soumya"
    const [name, setName] = useState("")    // Default value for name is blank i.e. ""
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    // console.log(name);    // Updated name will get here

    return (
        <div className='signUpForm'>
            <h2>SignUp Form</h2>
            {/* ------------Accessing the default value of useState---------------- */}
            {/* <input type="text" name="username" placeholder='Enter Your Name' value={testname}></input>     */}  
            <input type="text" name="username" placeholder='Enter Your Name' onInput={(e)=>setName(e.target.value)}></input>
            <input type="email" name="useremail" placeholder='Enter Your Email Id' onInput={(e)=>setEmail(e.target.value)}></input>
            <input type="password" name="userpassword" placeholder='Password' onInput={(e)=>setPassword(e.target.value)}></input>
            <button type='button'>Sign Up</button>
        </div>
    );
}

export default SignUp;