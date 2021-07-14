import React from "react";

function Checkbox(props) {
    return (
            <div className="form-checkbox" style={{top: props.top}} >
                <input type="checkbox" id={props.id} />
                <label for={props.id} >{props.label}</label>
            </div>
    );
}

export default Checkbox;