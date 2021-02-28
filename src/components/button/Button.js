import React from 'react';
import './Button.css';

function Button({ children, type, className, onClick, id }) {
    // Middels de props kan deze button op veel
    // verschillende manieren toegepast worden binnen de applicatie
    return (
        <div>
            <button
                className={className}
                type={type}
                onClick={onClick}
                id={id}
            >
                {children}
            </button>
        </div>
    );
}

export default Button;