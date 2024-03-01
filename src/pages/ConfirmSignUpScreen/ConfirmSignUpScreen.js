import React from "react";
import './ConfirmSignUpScreen.css'
import InputTextField from "../../components/InputTextField/InputTextField";
import {CiMail, CiLock} from "react-icons/ci";
import {FaRegEye, FaRegEyeSlash} from "react-icons/fa";
import Button from "../../components/Button/Button";

const ConfirmSignUpScreen = () => {
    return (
        <div className={'container'}>
            <div className={'center'}>
                <div className={'title'}>
                    <h3>ZALOFAKE - XÁC NHẬN ĐĂNG KÍ</h3>
                </div>
                <div className={'box'}>
                    <InputTextField type={'text'} placeholder={'Email'} icon={<CiMail className={'box-icon'}/>}/>
                    <InputTextField type={'text'} placeholder={'Mật khẩu'} icon={<CiLock className={'box-icon'}/>}
                                    behindIcon={<FaRegEyeSlash/>}/>
                    <InputTextField type={'text'} placeholder={'OTP'} icon={<CiLock className={'box-icon'}/>}/>
                    <Button nameBtn={'Đăng kí'}/>
                    <div className={'footer-box'}>
                        <span style={{fontSize: '14px'}}>Đã có tài khoản? <button
                            className={'sign-up-btn'}>Đăng nhập</button></span><br/>
                        <div/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ConfirmSignUpScreen