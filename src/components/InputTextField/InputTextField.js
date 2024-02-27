import React from "react";
import './InputTextField.css'
// icons

const InputTextField = ({type, placeholder, icon, behindIcon}) => {
    return (
        <div className={'textField-container'}>
            <div className={'textField-wrapper'}>
                {icon}
                <input type={type} placeholder={placeholder}/>
                {behindIcon &&
                    <button className={'behindIcon'}>
                        {behindIcon}
                    </button>}
            </div>
        </div>

    )
}

export default InputTextField