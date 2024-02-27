import React from "react";
// scss
import './SignInScreen.css'
// icons
import {CiMail, CiLock} from "react-icons/ci";
import {FaRegEye, FaRegEyeSlash } from "react-icons/fa";
//
import InputTextField from "../../components/InputTextField/InputTextField";
import Button from "../../components/Button/Button";

const SignInScreen = () => {
    return (
        <div className={'container'}>
            <div className={'center'}>
                <div className={'title'}>
                    <h3>ZALOFAKE - ĐĂNG NHẬP</h3>
                </div>
                <div className={'box'}>
                    <InputTextField type={'text'} placeholder={'Email'} icon={<CiMail className={'box-icon'}/>}/>
                    <InputTextField type={'password'} placeholder={'Mật khẩu'} icon={<CiLock className={'box-icon'}/>}
                                    behindIcon={<FaRegEye className={'box-icon'}/>}/>
                    <Button nameBtn={'Đăng nhập'}/>
                    <div className={'footer-box'}>
                        <span style={{fontSize:'14px'}}>Chưa có tài khoản? <button className={'sign-up-btn'}>Đăng kí</button></span><br/>
                        <button className={'forgot-pass-btn'}>Quên mật khẩu</button>
                        <div/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignInScreen