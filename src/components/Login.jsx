import React, { useState } from "react";
import { Link } from "react-router-dom";
import AccessLogo from "../images/requestForAccess.png";
import FormHeader from "./FormHeader";
import Checkbox from "./Checkbox";
import Email from "./Email";
import Password from "./Password";
import SubmitButton from "./SubmitButton";

function Login() {
    const [login, setLogin] = useState({
        loginEmail: "",
        loginPassword: ""
    });

    function fields(text, id) {
        setLogin((prevValue) => ({...prevValue, [id]: text}));
    }

    function handleSubmit(event) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(!re.test(String(login.loginEmail).toLowerCase())) {
            alert("Enter valid mail id");
            event.preventDefault();
        } else {
            alert("Successfully logged in");
        }
    }

    return (
        <div className="form-form">
            <FormHeader image={AccessLogo} title="Login" />

            <form action="/reset" className="form-content" onSubmit={handleSubmit} >
                <Email top="0px" field={fields} id="loginEmail" />
                <Password name="Password" placeholder="Credentials" top="67.66px" field={fields} id="loginPassword" />
                <Checkbox label="Remember me" top="143.32px" id="remember" />
                <SubmitButton submitText="Sign in" top="143.32px" />
            </form>

            <div className="login"><Link to="/forgotpassword">Lost your password?</Link></div>
            <div className="login" style={{top: "342.93px"}}>Not a member yet? <Link to="/requestforaccess">Request Access</Link></div>
        </div>
    );
}

export default Login;