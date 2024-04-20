import React from "react";
import "../index.css";
function CloseButton(props) {
  return (
    <div>
      <button className={props.classes} href={props.href} onClick={props.ClickhandleChange}> {props.text}</button>
    </div>
  );
}

export default CloseButton;
