import React from "react";
import './ForgotPasswordScreen.css'
import InputTextField from "../../components/InputTextField/InputTextField";
import {CiMail} from "react-icons/ci";
import Button from "../../components/Button/Button";

const ForgotPasswordScreen = () =>{
    return (
        <div className={'container'}>
            <div className={'center'}>
                <div className={'title'}>
                    <h3>ZALOFAKE - QUÊN MẬT KHÂỦ</h3>
                </div>
                <div className={'box'}>
                    <InputTextField type={'text'} placeholder={'Email'} icon={<CiMail className={'box-icon'}/>}/>
                    <Button nameBtn={'Lấy laị mật khẩu'}/>
                    <div className={'footer-box'}>
                        <button className={'back-to-signIn-btn'}>Trở lại đăng nhập</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ForgotPasswordScreen