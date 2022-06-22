import React from "react";

const Input = ({type,name,value,onChange,className,placeholder}) => {
  return (
    <div>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className={className}
        id="exampleFormControlInput1"
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
