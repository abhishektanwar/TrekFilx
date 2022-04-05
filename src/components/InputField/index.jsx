import React, { useState } from "react";
import "./input.css";
const InputField = ({
  parentClass,
  type,
  name,
  id,
  placeholder,
  labelText,
  onChange,
  value,
  labelClass,
  required,
  validation,
  showTogglePasswordButton,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div
      class={`flex-column form-field-container ${parentClass}`}
      style={{ position: "relative" }}
    >
      <label
        class={`input-label ${labelClass} ${
          !validation ? "invalid-field-color" : ""
        }`}
      >
        {labelText}
      </label>
      <input
        class={`form-field ${!validation ? "invalid-field-border" : ""}`}
        type={showTogglePasswordButton && showPassword ? "text" : type}
        name={name}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required ?? false}
      />
      {showTogglePasswordButton ? (
        <span
          role="button"
          className="toggle-password-button"
          onClick={() => setShowPassword((prev) => !prev)}
        >
          {showPassword ? (
            <i class="far fa-eye" style={{ fontSize: "1.6rem" }}></i>
          ) : (
            <i class="far fa-eye-slash" style={{ fontSize: "1.6rem" }}></i>
          )}
        </span>
      ) : null}
    </div>
  );
};

export default InputField;
