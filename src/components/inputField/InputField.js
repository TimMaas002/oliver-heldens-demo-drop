import React from 'react';
import './InputField.css';

function InputField({ children, type, id, value, onChange, placeholder }) {

    return (
        <>
            <div className="input-item-container">
                <label htmlFor={id}
                       className="input-item-label-white"
                >
                    {children}
                    <input
                        className="input-field"
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
