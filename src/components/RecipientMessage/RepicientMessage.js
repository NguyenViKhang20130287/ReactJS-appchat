import React from "react";
import './RepicientMessage.css'

const RepicientMessage = ({avatar, content, time}) => {
    return (
        <div className={'recipient-message'}>
            <div className={'recipient-avatar'}>
                <img src={avatar} alt={''}/>
            </div>
            <div className={'recipient-content'}>
                <span>{content}</span>
                <span className={'recipient-time'}>{time}</span>
            </div>
        </div>
    )
}

export default RepicientMessage