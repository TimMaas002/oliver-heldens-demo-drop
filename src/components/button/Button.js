import React from 'react';
import './Button.css';

function Button({ children, type, className, onClick}) {

    return (
        <div>
            <button
                className={className}
                type={type}
                onClick={onClick}
            >
                {children}
            </button>
        </div>
    );
}

export default Button;