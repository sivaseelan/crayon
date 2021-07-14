import React from "react";
import Success from "../images/success.png";
import FormHeader from "./FormHeader";
import { Link } from "react-router-dom";

function RequestForAccessInfo() {
    return (
        <div className="form-form">
            <FormHeader image={Success} title="Successfully Updated" />

            <div className="login" style={{top: "39.4px", height:"96px"}} >Password has been updated sucessfully srinivasan. Try login with your new credential and enjoy power of AI</div>
            <Link to="/login"><button type="submit" className="btn btn-dark form-submit" style={{left: "23px", top: "106.2px", width: "130px"}} >GO TO LOGIN</button></Link>
            <div className="login" style={{top: "142px", fontSize: "9px", height: "9px"}} >Redirecting in <strong style={{color: "black"}}>30 sec</strong></div>
        </div>
    );
}

export default RequestForAccessInfo;