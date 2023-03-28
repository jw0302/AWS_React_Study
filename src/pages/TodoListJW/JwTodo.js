/** @jsxImportSource @emotion/react */
import React, { useEffect, useRef, useState } from 'react';
import * as S from './style';

const JwTodo = () => {
    useEffect(() => {
        console.log("컴포넌트 렌더링");
    }, []);

    const todo = {
        id: 0,
        todoInput: ''
    }

    const todoIndex = useRef(1);
    const [todos, setTodos] = useState([]);
    const [inputs, setInputs] = useState(todo);
    const inputRefs = [useRef(), useRef(), useRef(), useRef()];
    const addButtonRef = useRef();

    const inputHandler = (e) => {
        const { name, value } = e.target;
        setInputs({...inputs, [name]: value});
    }

    const keyupHandler = (e) => {
        if(e.keyCode === 13) {
            addButtonRef.current.click();
        }
    }

    const addHandler = () => {
        const todo = {
            ...inputs
        };

        todo.id = todoIndex.current++;

        setTodos([...todos, todo]);
    }

    const onRemove = (index) => {
        setTodos(todos.filter(todo => todo.id !== index));
    } 


    return (
        <div css={S.Container}>
            <div css={S.Header}>
                <input css={S.Input} type="text" onKeyUp={keyupHandler} onChange={inputHandler} placeholder='할일을 입력하세요.' name='todoInput' ref={inputRefs} />
                <button css={S.Button} type='button' onClick={addHandler} ref={addButtonRef}>ADD</button>
            </div>
            <table css={S.Table}>
                {/* <thead>
                    <tr>
                        <th>index</th>
                        <th>todo</th>
                        <th>delete</th>
                    </tr>
                </thead> */}
                <tbody css={S.Table}>
                    {todos.map(todo => {

                        return (
                            <tr key={todo.id}>
                                <td css={S.Td1}>{todo.id}</td>
                                <td css={S.Td2}>{todo.todoInput}</td>
                                <td css={S.Td3}>
                                    <button onClick={() => onRemove(todo.id)}>삭제</button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default JwTodo;