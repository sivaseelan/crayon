import React, { useState } from "react"

function Email(props) {
    const [email, setEmail] = useState("");

    function handleChange(event) {
        const value = event.target.value;
        setEmail(value);
        props.field(value, props.id);
    }

    return (
        <div className="form-input" style={{top: props.top}}>
            <div className="form-input-label">Email id</div>
            <input className="form-input-text" type="email" placeholder="@hdfc.com" name={props.id} value={email} onChange={handleChange} />
        </div>
    );
}

export default Email; 