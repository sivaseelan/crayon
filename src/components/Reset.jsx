import React, { useState } from "react";
import FormHeader from "./FormHeader";
import ResetImage from "../images/reset.png";
import Set from "../images/set.png";
import Password from "./Password";
import SubmitButton from "./SubmitButton";
import qs from "qs";

function Reset(props) {
    const details = qs.parse(window.location.search.slice(1,));

    const [credential, setCredential] = useState({
        password: "",
        confirmPassword: ""
    });

    function fields(text, id) {
        setCredential((prevValue) => ({...prevValue, [id]: text}));
    }

    function handleSubmit(event) {
        if(credential.password.length <= 5) {
            alert("Minimum length of password is 6");
            event.preventDefault();
        }

        if(credential.password !== credential.confirmPassword) {
            alert("Passwords should match");
            event.preventDefault();
        }
    }

    return (
        <div className="form-form">
            <FormHeader image={props.set?Set:ResetImage} title={props.set?"Welcome "+details.fullName+", Set your credentials":props.title + " " +details.loginEmail} />

            <form action={props.set?"/"+details.fullName:"/resetinfo"} className="form-content" onSubmit={handleSubmit} >
                <Password name="New Password" placeholder="Credentials" top="0px" field={fields} id="password" />
                <Password name="Re-Enter Password" placeholder="Re-type Credentials" top="67.66px" field={fields} id="confirmPassword" />
                <SubmitButton submitText="Submit" top="143.32px" />
            </form>
        </div>
    );
}

export default Reset;