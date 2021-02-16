import React from 'react';
import './InputField.css';

function InputField({ children, type, id, value, onChange, placeholder, className }) {

    return (
        <>
            <div className="input-item__container">
                <label htmlFor={id}
                >
                    {children}
                    <input
                        className={className}
                        type={type}
                        id={id}
                        value={value}
                        placeholder={placeholder}
                        onChange={onChange}
                    />
                </label>
            </div>
        </>
    );
}

export default InputField;
