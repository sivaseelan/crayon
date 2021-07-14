import React from "react";

function FormHeader(props) {
    return (
        <div className="form-header">
            <img src={props.image} alt={props.title} className="form-header-image" />
            <h1 className="form-header-title" >{props.title}</h1>
        </div>
    );
}

export default FormHeader;