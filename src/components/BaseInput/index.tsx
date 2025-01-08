import React, { ChangeEvent, FC, FocusEvent } from "react";

type BaseInputProps = {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onBlur: (e: FocusEvent<HTMLInputElement>) => void;
  name: string;
  placeholder: string;
  type?: string;
  error?: string;
};

const BaseInput: FC<BaseInputProps> = ({
  value,
  onChange,
  onBlur,
  name,
  placeholder,
  type = "text",
  error,
}) => {
  return (
    <div className="flex flex-col">
      <input
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        name={name}
        placeholder={placeholder}
        type={type}
        className="w-full px-4 py-2 border-2 border-gray-300 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
      />
      {error && <span className="text-red-500 text-sm mt-1">{error}</span>}
    </div>
  );
};

export default BaseInput;
