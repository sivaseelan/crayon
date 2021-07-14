import React, { useState } from "react";
import FormHeader from "./FormHeader";
import Email from "./Email";
import Checkbox from "./Checkbox";
import SubmitButton from "./SubmitButton";
import AccessLogo from "../images/requestForAccess.png";


function RequestForAccess() {
    const [access, setAccess] = useState({
        fullName: "",
        accessEmail: "",
        accessReason: ""
    });

    function fields(text, id) {
        setAccess(prevValue => ({...prevValue, [id]: text}));
    }

    function handleSubmit(event) {
        if(access.fullName === "") {
            alert("Enter name");
            event.preventDefault();
        }

        if(access.accessReason === "") {
            alert("Enter reason");
            event.preventDefault();
        } 

        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(!re.test(String(access.accessEmail).toLowerCase())) {
            alert("Enter valid mail id");
            event.preventDefault();
        }
    } 

    return (
        <div className="form-form">
            <FormHeader image={AccessLogo} title="Request for access" />

            <form action="/set" className="form-content" onSubmit={handleSubmit} >
                <div className="form-input">
                    <div className="form-input-label">Name</div>
                    <input className="form-input-text" type="text" placeholder="Full Name" name="fullName" value={access.fullName} onChange={(event) => fields(event.target.value, "fullName")} />
                </div>

                <Email top="67.66px" field={fields} id="accessEmail" />

                <div className="form-input" style={{top: "135.32px"}}>
                    <div className="form-input-label">Reason for request</div>
                    <input className="form-input-text" type="text" placeholder="Brief your requirements & Approval" name="reason" value={access.accessReason} onChange={(event) => fields(event.target.value, "accessReason")}/>
                </div>

                <Checkbox label="Send me a email copy" id="email_send" />
                <SubmitButton submitText="Submit" />
            </form>
        </div>
    );
}

export default RequestForAccess;