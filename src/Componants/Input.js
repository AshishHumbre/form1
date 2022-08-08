import React from "react";

const Input = ({ label, errorMessage, ...props }) => (
  <div className="input-text">
    <label className="input-label">{label}</label>
    <input {...props} />
    {errorMessage && <span className="errorMessage">{errorMessage}</span>}
  </div>
);
export default Input;
