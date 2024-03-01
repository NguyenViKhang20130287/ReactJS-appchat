import React from "react";
import './User.css'
import AVATAR_USER from "../../assets/avatar-owner.jpg";

const User = ()=>{
    return(
        <div className={'user-wrapper'}>
            <div className={'user-avatar'}>
                <div className={'avatar-wrapper'}>
                    <img src={AVATAR_USER} alt={''}/>
                </div>
            </div>
            <div className={'info-wrapper'}>
                <span className={'info-displayName'}>khang</span>
                <span className={'info-lastMessage'}>alooooo</span>
            </div>
        </div>
    )
}

export default User