import React, { useState } from "react";

function Password(props) {
    const [password, setPassword] = useState("");

    function handleChange(event) {
        const value = event.target.value;
        setPassword(value);
        props.field(value, props.id);
    }

    return (
        <div className="form-input" style={{top: props.top}}>
            <div className="form-input-label">{props.name}</div>
            <input className="form-input-text" type="password" placeholder={props.placeholder} value={password} name={props.id} onChange={handleChange} />
        </div>
    );
}

export default Password;