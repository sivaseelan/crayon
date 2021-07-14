import React from "react";
import { Link } from "react-router-dom";
import Forgot from "../images/forgotPassword.png";
import FormHeader from "./FormHeader";
import qs from "qs";

function ForgotPasswordInfo() {
    const email = qs.parse(window.location.search.slice(1,)).forgotPasswordEmail;

    return (
        <div className="form-form">
            <FormHeader image={Forgot} title="Forgot Password" />

            <div className="login" style={{top: "39.4px", height:"96px"}} >
                Email has been sent to your inbox ({email}) with magic link to reset your credential.
                <br />
                <br />
                <br />
                Reset magic link is valid for next 30 minutes
            </div>
            <div className="login" style={{top: "180.4px"}} >Go Back to <Link to="/login"><strong style={{color: "black"}}>Login</strong></Link></div>
        </div>
    );
}

export default ForgotPasswordInfo;