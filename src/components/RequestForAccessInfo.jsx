import React from "react";
import { useParams } from "react-router-dom";
import AccessLogo from "../images/requestForAccess.png";
import FormHeader from "./FormHeader";

function RequestForAccessInfo() {
    const {user} = useParams();

    return (
        <div className="form-form">
            <FormHeader image={AccessLogo} title="Request for access" />

            <div className="login" style={{top: "39.4px", height:"96px"}} >Thanks {user} for your interest, We have requested admin to verify and approval. Watchout your email for welcome email with magic link for us.</div>
            <div className="login" style={{top: "135.4px"}} >You can also write us at <strong style={{color: "black"}}>admin@maya.ai</strong></div>
        </div>
    );
}

export default RequestForAccessInfo;