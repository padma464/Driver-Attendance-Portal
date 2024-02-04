import React, { useState } from "react";
// import './Login.css';
import { useNavigate } from "react-router-dom";
export const Login = (props) => {
    const nav = useNavigate();
    // const [isLoggedin,setIsLoggedin]=useState(false);
    // const [username, setUsername] = useState('');
    // const [pass, setPass] = useState('');
    const [students, setStudents] = useState([
        {
            username: "20P31A0464",
            pass: "puppy@123"
        },
        {
            username: "20P31A0433",
            pass: "anu@123"
        },
        {
            username: "20P31A04A5",
            pass: "sony@123"
        },
        {
            username: "21P35A0379",
            pass: "uday@123"
        }

    ])
    const handleSubmit = (name, roll1) => {
        let obj = {
            username: name,
            pass: roll1
        }
        let ans = students.some((ele) => JSON.stringify(ele) === JSON.stringify(obj))
        console.log(ans)
        if (ans) nav('/dash') 
        else alert("Enter valid Details");

    }
    let name = "";
    let roll = "";

    return (

        <div className="container-fluid login" id="makeup"style={{ 
            backgroundImage: `url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuqYiTSX9gZu5QuNAUvK9GG1q5mtgPstaFllNFqbpktODY2S0xEQ3JpsQiNHc0dnhdE6xqEr_cwyQ&usqp=CAU&ec=48665701`}}>
            <br />
            <br />
            <br />
            <div className="row">
                <div className="col-md-4"></div>
                <div className="col-md-4" id="login1">
                    <div className="auth-form-container" id="login2"><br/><br/>
                        <h2>Admin Login</h2>
                        <br/>
                        <form className="login-form" onSubmit={handleSubmit}>
                            <label htmlFor="username"><b>Username</b></label>
                            <input type="username" placeholder="" id="email" className="form-control"onChange={(e) => name = e.target.value} /><br/>
                            <label htmlFor="password"><b>Password</b></label>
                            <input type="password" placeholder="" id="pass" name="password" className="form-control"onChange={(e) => roll = e.target.value} /><br/><br/>
                            <button id="genbtn" className="btn-btn-info" type="button"onClick={(e) => { e.preventDefault(); handleSubmit(name, roll) }}>Log in</button>
                        </form>
                        {/* <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Forgot Password</button> */}
                    </div>
                    <div className="col-md-4"></div>
                </div>
            </div>
        </div>


    )
}

export default Login;
