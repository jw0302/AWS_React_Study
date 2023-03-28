/** @jsxImportSource @emotion/react */
import React, { useEffect, useRef, useState } from 'react';
import * as S from './style';

const UserList = () => {
    useEffect(() => {
        console.log("컴포넌트 렌더링");
    }, []);

    const user = {
        id: 0,
        username: '',
        password: '',
        name: '',
        email: '',
        modifyFlag: false
    }

    const userIndex = useRef(1);
    const [users, setUsers] = useState([]);
    const [inputs, setInputs] = useState(user);
    const inputRefs = [useRef(), useRef(), useRef(), useRef()];
    const addButtonRef = useRef();

    // input 클릭후 입력이 먹히도록 해줌
    const inputHandler = (e) => {
        const { name, value } = e.target;
        setInputs({...inputs, [name]: value});
    }

    // 각 input창에서 입력후 다음 input으로 넘어갈때 엔터키가 먹히도록 하며 마지막 input 입력후 엔터키 누르면 추가 button 모션도 먹혀 리스트에 추가됨
    const keyupHandler = (e) => {
        if(e.keyCode === 13) {
            let index = 0;
            switch(e.target.name) {
                case 'username' : index = 1; break;
                case 'password' : index = 2; break;
                case 'name' : index = 3; break;
                default : addButtonRef.current.click();
            }
            if(index !== 0) {
                inputRefs[index].current.focus();
            }
        }
    }

    // input 입력값을 list에 추가하면서 인덱스 번호도 표시
    const addHandler = () => {
        const user = {
            ...inputs
        };

        user.id = userIndex.current++;

        setUsers([...users, user]);
    }

    // 삭제 버튼 클릭시 해당 인덱스의 리스트 삭제
    const onRemove = (index) => {
        // users.splice(index - 1, 1);
        // setUsers([...users]);
        setUsers(users.filter(user => user.id !== index));
    }

    // user값 수정
    const onModify = (index) => {
        setUsers(users.map(user => {
            if(user.id === index) {
                setInputs({...user});
                user.modifyFlag = true;
            }else {
                user.modifyFlag = false;
            }
            return user;
        }));
    }

    // 수정한 user값 저장
    const onSave = (index) => {
        setUsers(users.map(user => {
            if(user.id === index) {
                return {
                    ...inputs,
                    // id: user.id
                };
            }
            return user;
        }));
    }

    // const users = [
    //     {
    //         id: 1,
    //         username: 'aaa',
    //         password: '1234',
    //         name: 'AAA',
    //         email: 'aaa@gamil.com'
    //     },
    //     {
    //         id: 2,
    //         username: 'bbb',
    //         password: '1234',
    //         name: 'BBB',
    //         email: 'bbb@gamil.com'
    //     },
    //     {
    //         id: 3,
    //         username: 'ccc',
    //         password: '1234',
    //         name: 'CCC',
    //         email: 'ccc@gamil.com'
    //     }
    // ]

    // const userIndex = useRef(4);

    return (
        <div css={S.Container}>
            <div>
                <input css={S.Input} type="text" onKeyUp={keyupHandler} onChange={inputHandler} placeholder='username' name='username' ref={inputRefs[0]}/>
                <input css={S.Input} type="text" onKeyUp={keyupHandler} onChange={inputHandler} placeholder='password' name='password' ref={inputRefs[1]}/>
                <input css={S.Input} type="text" onKeyUp={keyupHandler} onChange={inputHandler} placeholder='name' name='name' ref={inputRefs[2]}/>
                <input css={S.Input} type="text" onKeyUp={keyupHandler} onChange={inputHandler} placeholder='email' name='email' ref={inputRefs[3]}/>
                <button type='button' onClick={addHandler} ref={addButtonRef}>추가</button>
            </div>
            <table css={S.Table}>
                <thead>
                    <tr>
                        <th css={S.ThAndTd}>index</th>
                        <th css={S.ThAndTd}>username</th>
                        <th css={S.ThAndTd}>password</th>
                        <th css={S.ThAndTd}>name</th>
                        <th css={S.ThAndTd}>email</th>
                        <th css={S.ThAndTd}>update</th>
                        <th css={S.ThAndTd}>delete</th>
                    </tr>
                </thead>
                <tbody>
                    {/* users가 array여야만 map을 사용할수 있다. key : index, value : user 입력값 */}
                    {users.map(user => {

                        // userIndex.current += 1;

                        return (
                            <tr key={user.id}>
                                <td css={S.ThAndTd}>{user.id}</td>
                                <td css={S.ThAndTd}>{user.modifyFlag ? (<input type="text" onKeyUp={keyupHandler} onChange={inputHandler} placeholder='username' name='username' ref={inputRefs[0]} defaultValue={user.username} />) : user.username}</td>
                                <td css={S.ThAndTd}>{user.modifyFlag ? (<input type="text" onKeyUp={keyupHandler} onChange={inputHandler} placeholder='password' name='password' ref={inputRefs[1]} defaultValue={user.password} />) : user.password}</td>
                                <td css={S.ThAndTd}>{user.modifyFlag ? (<input type="text" onKeyUp={keyupHandler} onChange={inputHandler} placeholder='name' name='name' ref={inputRefs[2]} defaultValue={user.name} />) : user.name}</td>
                                <td css={S.ThAndTd}>{user.modifyFlag ? (<input type="text" onKeyUp={keyupHandler} onChange={inputHandler} placeholder='email' name='email' ref={inputRefs[3]} defaultValue={user.email} />) : user.email}</td>
                                <td css={S.ThAndTd}>
                                    {user.modifyFlag
                                        ? <button onClick={() => onSave(user.id)}>확인</button>
                                        : <button onClick={() => onModify(user.id)}>수정</button>
                                    }
                                </td>
                                <td css={S.ThAndTd}>
                                    <button onClick={() => onRemove(user.id)}>삭제</button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default UserList;