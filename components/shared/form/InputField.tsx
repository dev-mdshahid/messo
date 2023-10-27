import React from "react";

type InputFieldProps = {
  name: string;
  type: string;
  label: string;
  placeholder: string;
  min?: number;
  max?: number;
};

const InputField = ({
  name,
  type,
  label,
  placeholder,
  min,
  max,
}: InputFieldProps) => {
  return (
    <div className="w-full">
      <label
        className="mb-2 block text-sm font-semibold text-gray-600"
        htmlFor={name}
      >
        {label}
      </label>
      <input
        className="w-full rounded border border-gray-300 px-4 py-2 outline-messo-600"
        name={name}
        type={type}
        placeholder={placeholder}
        min={min}
        max={max}
        required
      ></input>
    </div>
  );
};

export default InputField;
