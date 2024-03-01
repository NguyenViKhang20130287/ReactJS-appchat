import React from "react";
// css
import './HomeScreen.css'
// icon
import {LuSearch} from "react-icons/lu";
import {IoSend} from "react-icons/io5";
import {IoIosMore} from "react-icons/io";
// components
import AVATAR_OWNER from '../../assets/avatar-owner.jpg'
import User from '../../components/User/User'
import RepicientMessage from "../../components/RecipientMessage/RepicientMessage";
import SenderMessage from "../../components/SenderMessage/SenderMessage";

const HomeScreen = () => {
    return (
        <div className={'container'}>
            <div className={'center'}>
                <div className={'sidebar'}>
                    <div className={'info-owner'}>
                        <div className={'avatar-owner'}>
                            <img src={AVATAR_OWNER} alt={''}/>
                        </div>
                        <div className={'name-owner'}>
                            <span className={'displayName'}>nguyenvikhang</span> <br/>
                            <span className={'email'}>vikhang17112002@gmail.com</span>
                        </div>
                    </div>
                    <div className={'wrapper'}>
                        <div className={'search-wrapper'}>
                            <input placeholder={'Tìm kiếm...'}/>
                            <LuSearch className={'search-icon'}/>
                        </div>
                        <div className={'chat-users'}>
                            <User/>
                            <User/>
                            <User/>
                            <User/>
                        </div>
                    </div>

                </div>
                <div className={'chat-box'}>
                    <div className={'chat-navbar'}>
                        <div className={'navbar-info'}>
                            <div className={'avatar-user'}>
                                <img src={AVATAR_OWNER} alt={''}/>
                            </div>
                            <div className={'name-user'}>
                                <span className={'displayName'}>nguyenvikhang</span>
                                <span></span>
                            </div>
                        </div>
                        <div className={'option'}>
                            <button className={'more'}>
                                <IoIosMore className={'more-icon'}/>
                            </button>
                        </div>
                    </div>
                    <div className={'chat-content'}>
                        <RepicientMessage avatar={AVATAR_OWNER} content={'hello'} time={'2-28-2024'}/>
                        <SenderMessage avatar={AVATAR_OWNER} content={'hi'} time={'2-28-2024'}/>
                        <RepicientMessage avatar={AVATAR_OWNER} content={'hello'} time={'2-28-2024'}/>
                        <SenderMessage avatar={AVATAR_OWNER} content={'hi'} time={'2-28-2024'}/>
                        <RepicientMessage avatar={AVATAR_OWNER} content={'hello'} time={'2-28-2024'}/>
                        <SenderMessage avatar={AVATAR_OWNER} content={'hi'} time={'2-28-2024'}/>
                        <RepicientMessage avatar={AVATAR_OWNER} content={'hello'} time={'2-28-2024'}/>
                        <SenderMessage avatar={AVATAR_OWNER} content={'hi'} time={'2-28-2024'}/>
                        <RepicientMessage avatar={AVATAR_OWNER} content={'hello'} time={'2-28-2024'}/>
                        <SenderMessage avatar={AVATAR_OWNER} content={'hi'} time={'2-28-2024'}/>
                        <RepicientMessage avatar={AVATAR_OWNER} content={'hello'} time={'2-28-2024'}/>
                        <SenderMessage avatar={AVATAR_OWNER} content={'hi'} time={'2-28-2024'}/>
                    </div>
                    <div className={'type-message'}>
                        <input placeholder={'Nhập tin nhắn...'} type={"text"}/>
                        <button type={"button"} className={'send-btn'}>
                            <IoSend/>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeScreen