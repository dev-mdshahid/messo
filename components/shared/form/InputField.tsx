import React from "react";

type InputFieldProps = {
  name: string;
  type: string;
  label: string;
  placeholder: string;
  defaultValue?: any;
  min?: number;
  max?: number;
  step?: number;
};

const InputField = ({
  name,
  type,
  label,
  placeholder,
  min,
  max,
  step,
  defaultValue,
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
        defaultValue={defaultValue}
        min={min}
        max={max}
        step={step}
        required
      ></input>
    </div>
  );
};

export default InputField;
