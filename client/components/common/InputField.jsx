import React from 'react';
import { Controller } from 'react-hook-form';

const InputField = ({
  control,
  type,
  label,
  error,
  name,
  placeholder,
  value,
  className,
}) => {
  return (
    <div>
      <label>{label}</label>
      <Controller
        name={name}
        control={control}
        defaultValue={value ?? ''}
        render={({ field }) => (
          <input
            type={type}
            className={`mt-1 ${error ? 'border-danger' : ''} ${className ?? ''}`}
            placeholder={placeholder}
            {...field}
          />
        )}
      />
      <div style={{ height: 2 }}>
        <span style={{ fontSize: 'smaller' }} className="text-danger">
          {error && <span>{error}</span>}
        </span>
      </div>
    </div>
  );
};

export default InputField;
