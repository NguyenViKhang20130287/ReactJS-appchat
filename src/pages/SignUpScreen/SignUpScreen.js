import React from "react";
// css
import './SignUpScreen.css'
// icons
import {CiMail} from "react-icons/ci";
//
import InputTextField from "../../components/InputTextField/InputTextField";
import Button from "../../components/Button/Button";

const SignUpScreen = () => {
    return (
        <div className={'container'}>
            <div className={'center'}>
                <div className={'title'}>
                    <h3>ZALOFAKE - ĐĂNG KÍ</h3>
                </div>
                <div className={'box'}>
                    <InputTextField type={'text'} placeholder={'Email'} icon={<CiMail className={'box-icon'}/>}/>
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

export default SignUpScreen