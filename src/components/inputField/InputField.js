import React from 'react';
import './InputField.css';

function InputField({ children, type, id, value, onChange, placeholder, className, accept }) {
    // Hier wordt het input field component aangemaakt met meerdere props
    // die in de rest van de applicatie aangeroepen kunnen worden
    return (
        <>
            <div className="input-item__container">
                <label htmlFor={id}>
                    {children}
                    <input
                        className={className}
                        type={type}
                        id={id}
                        value={value}
                        placeholder={placeholder}
                        accept={accept}
                        onChange={onChange}
                    />
                </label>
            </div>
        </>
    );
}

export default InputField;
