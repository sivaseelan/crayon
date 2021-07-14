import React from "react";

function SubmitButton(props) {
    return (
        <button type="submit" className="btn btn-dark form-submit" style={{top: props.top}} >{props.submitText}</button>
    );
}

export default SubmitButton;