import React from "react";
import './ConfirmForgotPasswordScreen.css'
import InputTextField from "../../components/InputTextField/InputTextField";
import {CiMail, CiLock} from "react-icons/ci";
import {FaRegEye, FaRegEyeSlash} from "react-icons/fa";
import Button from "../../components/Button/Button";

const ConfirmForgotPasswordScreen = () => {
    return (
        <div className={'container'}>
            <div className={'center'}>
                <div className={'title'}>
                    <h3>ZALOFAKE - XÁC NHẬN ĐĂNG KÍ</h3>
                </div>
                <div className={'box'}>
                    <InputTextField type={'text'} placeholder={'Email'} icon={<CiMail className={'box-icon'}/>}/>
                    <InputTextField type={'text'} placeholder={'Mật khẩu mới'} icon={<CiLock className={'box-icon'}/>}
                                    behindIcon={<FaRegEyeSlash/>}/>
                    <InputTextField type={'text'} placeholder={'OTP'} icon={<CiLock className={'box-icon'}/>}/>
                    <Button nameBtn={'Đặt lại mật khẩu'}/>
                    <div className={'footer-box'}>
                        <button className={'back-to-signIn-btn'}>Trở lại đăng nhập</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ConfirmForgotPasswordScreen