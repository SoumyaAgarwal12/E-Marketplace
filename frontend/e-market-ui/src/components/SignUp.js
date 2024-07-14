import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignUp = ()=>{
    // const [testname, setTestName] = useState("Soumya")    // Default value for testname is "Soumya"
    const [name, setName] = useState("")    // Default value for name is blank i.e. ""
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate();

    // console.log(name);    // Updated name will get here

    // Call NodeJs API to save data 
    const savedata = async()=>{
        let result = await fetch("http://localhost:9000/register",{
            method : "POST",
            body : JSON.stringify({name,email,password}),
            headers : {
                'Content-type' : 'application/json'
            }
        })

        // if response are in json format 
        // result = result.json();    // It returns promise so
        result = await result.json();   
        // console.log(result)
        if(result){
            navigate("/");     // Navigate to Home Page
        }
    }

    return (
        <div className='signUpForm'>
            <h2>SignUp Form</h2>
            {/* ------------Accessing the default value of useState---------------- */}
            {/* <input type="text" name="username" placeholder='Enter Your Name' value={testname}></input>     */}  
            <input type="text" name="username" placeholder='Enter Your Name' onInput={(e)=>setName(e.target.value)}></input>
            <input type="email" name="useremail" placeholder='Enter Your Email Id' onInput={(e)=>setEmail(e.target.value)}></input>
            <input type="password" name="userpassword" placeholder='Password' onInput={(e)=>setPassword(e.target.value)}></input>
            <button type='button' onClick={savedata}>Sign Up</button>
        </div>
    );
}

export default SignUp;