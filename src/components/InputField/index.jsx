import React from "react";
import './input.css'
const InputField = ({parentClass,type,name,id,placeholder,labelText,onChange,value,labelClass,required, validation}) => {
  return (
    <div class={`flex-column form-field-container ${parentClass}`}>
      <label class={`input-label ${labelClass} ${!validation ? 'invalid-field-color' : ''}`}>{labelText}</label>
      <input
        class={`form-field ${!validation ? 'invalid-field-border' : ''}`}
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required ?? false}
      />
    </div>
  );
};

export default InputField;
