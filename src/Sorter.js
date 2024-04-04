import React from "react";

function Sorter(props) {
  return (
    <>
       <input type="radio" value={props.title} id={props.id} name="tabs" onChange={props.onChange} />
        <label className="tab" htmlFor={props.id}>
         {props.title}
        </label>
    </>
  );
}

export default Sorter;
