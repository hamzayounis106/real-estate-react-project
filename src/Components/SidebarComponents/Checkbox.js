import React from "react";

function Checkbox({ title, value, name, handlecheck, type }) {
   
  return (
    <div>
      <div>
        <input
          type={type}
          onChange={handlecheck}
          name={name}
          value={value}
          id={title}
        />
        <label  className=" cursor-pointer  lable_filter text-white pl-2 font-light " htmlFor={title}>
          {title}
        </label>
      </div>
    </div>
  );
}

export default Checkbox;
