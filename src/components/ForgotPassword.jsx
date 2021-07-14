import React, { useState } from "react";
import { Link } from "react-router-dom";
import FormHeader from "./FormHeader";
import Email from "./Email";
import SubmitButton from "./SubmitButton";
import Forgot from "../images/forgotPassword.png";

function ForgotPassword() {
    const [forgotPasswordEmail, setForgotPasswordEmail] = useState("");

    function field(text, id) {
        setForgotPasswordEmail(text);
    }

    function handleSubmit(event) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(!re.test(String(forgotPasswordEmail).toLowerCase())) {
            alert("Enter valid mail id");
            event.preventDefault();
        }
    }

    return (
        <div className="form-form">
            <FormHeader image={Forgot} title="Forgot Password" />

            <form action="/forgotpasswordinfo" className="form-content" onSubmit={handleSubmit} >
                <Email top="0px" field={field} id="forgotPasswordEmail" />
                <div className="form-checkbox" style={{top: "74.96px"}} >
                    Go back to <Link to="/login">Login</Link>
                </div>
                <SubmitButton submitText="Reset in" top="74.96px" />
            </form>
        </div>
    ); 
}

export default ForgotPassword;