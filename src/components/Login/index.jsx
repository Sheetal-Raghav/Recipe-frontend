import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
// import './style.css'

const Login=()=>{
    const[data,setData]=useState({email:"",password:""})
    const [error,setError]=useState("");

    const handleChange=({currentTarget: input})=>{
        setData({...data,[input.name]:input.value})
    }

    const handleSubmit=async (e)=>{
        e.preventDefault()
        try {
            const url="https://recipe-backend-ok1x.onrender.com/login";
            const {data:res}=await axios.post(url,data);
            localStorage.setItem("token",res.data);
            window.location="/"
        } catch (error) {
            if(error.response && error.response.status>=400 && error.response.status<=500){
                setError(error.response.data.message)
            }
        }
    }

    return(
        <>
            <div className="container">
                <div className="container2">
                    <div>
                        <form onSubmit={handleSubmit}>
                            <h1>Sign In</h1>
                            <label>Email:</label>
                            <input type='email' placeholder="Email" name="email" onChange={handleChange} value={data.email} required className="email"/>
                            <br />
                            <label>Password:</label>
                            <input type="password" placeholder="Password" name="password" onChange={handleChange} value={data.password} required />
                        {error && <div>{error}</div>}
                        <br />
                        <button type="submit" className="signin">Sign-In</button>
                        </form>
                        <div>
                            <h1>Not have a Account</h1>
                        </div>
                        <Link to="/signup">
                            <button type="button" className="signin">
                                Sign-up
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )

}

export default Login