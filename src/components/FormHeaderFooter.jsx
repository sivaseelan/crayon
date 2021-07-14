import React from "react";

function FormHeaderFooter(props) {
    return (
        <div className={"maya" + (props.footer?"-footer":"")}>
            <img className={(props.footer?"footer":"maya") + "-logo"} src={props.image} alt={props.footer?"footer":"maya"} />
            <p className={(props.footer?"footer":"maya") + "-content"}>{props.content}</p>
        </div>
    )
};

export default FormHeaderFooter;