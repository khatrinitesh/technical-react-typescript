import React from 'react';
import { InputFieldProps } from '.';

const InputField: React.FC<InputFieldProps> = ({
    id,
    name,
    type,
    value,
    onChange,
    error,
    placeholder,
    maxLength
  }) => {
    return (
      <div className="mb-4">
        <label htmlFor={id} className="block text-sm font-medium text-gray-700">
          {name.charAt(0).toUpperCase() + name.slice(1)}
        </label>
        <input
          id={id}
          maxLength={maxLength}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
        />
        {error && <div className="text-red-600 text-sm">{error}</div>}
      </div>
    );
  };

export default InputField;
