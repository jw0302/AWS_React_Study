import React, { useRef, useState } from 'react';

const InputSample = () => {
    const userInfo = {
        username: '',
        password: '',
        email: ''
    }

    const [userInput, setUserInput] = useState(userInfo);
    const [userInfoText, setUserInfoText] = useState(userInfo);

    const { username, password, email } = userInfoText;

    const passwordRef = useRef();
    const emailRef = useRef();

    const handlerChange = (e) => {
        const { name, value } = e.target;
        setUserInput({...userInput, [name]: value});
    }

    // username input 에 커서가 있을때 엔터 키 입력시 password input으로 포커스 넘어감
    const nextFocus = (e) => {
        if(e.keyCode === 13) {
            passwordRef.current.focus();
        }
    }

    const nextFocus1 = (e) => {
        if(e.keyCode === 13) {
            emailRef.current.focus();
        }
    }

    // username과 password를 모두 입력후 password에서 엔터 입력시 text창에 입력값 표시됨
    // const submitHandler = (e) => {
    //     if(e.keyCode === 13) {
    //         setUserInfoText({...userInput});
    //     }
    // }

    // 버튼 클릭시 text창에 input값 표시
    const handlerClick = () => {
        setUserInfoText({...userInput});
    }

    return (
        <div>
            <input 
                type="text" 
                onChange={handlerChange}
                onKeyUp={nextFocus} 
                name="username"
            />
            <input 
                type="password" 
                onChange={handlerChange}
                onKeyUp={nextFocus1}
                name="password"
                ref={passwordRef}
            />
            <input 
                type="email" 
                onChange={handlerChange}
                // onKeyUp={submitHandler}
                name="email"
                ref={emailRef}
            />
            <button type='button' onClick={handlerClick}>추가</button>
            <button type='button' onClick={null}>삭제</button>
            <div>username: {username}</div>
            <div>password: {password}</div>
            <div>email: {email}</div>
        </div>
    );
};

export default InputSample;