import React from "react";
import './SenderMessage.css'

const SenderMessage = ({avatar, content, time}) => {
    return (
        <div className={'sender-message'}>
            <div className={'sender-avatar'}>
                <img src={avatar} alt={''}/>
            </div>
            <div className={'sender-content'}>
                <span>{content}</span>
                <span className={'sender-time'}>{time}</span>
            </div>
        </div>
    )
}

export default SenderMessage