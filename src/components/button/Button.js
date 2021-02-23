import React from 'react';
import './Button.css';

function Button({ children, type, className, onClick, id }) {

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