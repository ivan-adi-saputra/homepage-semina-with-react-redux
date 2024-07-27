import React from "react";

export default function Input({
  type,
  name,
  value,
  placeholder,
  label,
  onChange,
}) {
  return (
    <>
      <label for={name} class="form-label">
        {label}
      </label>
      <input
        type={type}
        class="form-control"
        name={name}
        placeholder={placeholder}
        onChange={onChange}
      />
    </>
  );
}
