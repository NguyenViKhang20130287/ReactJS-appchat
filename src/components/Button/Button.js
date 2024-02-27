import React from "react";
import './Button.css'

const Button = ({nameBtn, type}) => {
    return (
        <div className={'btn-container'}>
            <div className={'btn-wrapper'}>
                <button className={'submitBtn'} type={type}>{nameBtn}</button>
            </div>
        </div>

    )
}

export default Button