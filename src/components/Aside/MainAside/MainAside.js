/** @jsxImportSource @emotion/react */
import React from 'react';
import { Navigation } from "react-minimal-side-navigation/lib";
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';
import { HiHome } from 'react-icons/hi';
import { GrTest } from 'react-icons/gr';
import { BsCardChecklist } from 'react-icons/bs';
import { BiListCheck } from 'react-icons/bi';
import { FaUsers } from 'react-icons/fa';
import * as S from './style';
import { useNavigate } from 'react-router-dom';

const MainAside = () => {
    const navigate = useNavigate();

    return (
        <aside css={S.style}>
            <Navigation
            // you can use your own router's api to get pathname
            activeItemId="/"
            onSelect={({itemId}) => {
                navigate(itemId);
            }}
            items={[
              {
                title: 'Home',
                itemId: '/',
                elemBefore: () => <HiHome />
              },
              {
                title: 'T1',
                itemId: '/t1',
                elemBefore: () => <GrTest />
              },
              {
                title: 'T2',
                itemId: '/t2',
                elemBefore: () => <GrTest />
              },
              {
                title: 'Sample',
                itemId: '/sample/input/1',
                elemBefore: () => <BsCardChecklist />,
                subNav: [
                    {
                        title: 'sample',
                        itemId: '/sample/input/1',
                        elemBefore: () => <BiListCheck />
                    }
                ]
              },
              {
                title: 'List',
                itemId: '/users',
                elemBefore: () => <BsCardChecklist />,
                subNav: [
                    {
                        title: '사용자 전체 조회',
                        itemId: '/users',
                        elemBefore: () => <FaUsers />
                    }
                ]
              },
              {
                title: 'TODOLIST-JW',
                itemId: '/todoList',
                elemBefore: () => <BsCardChecklist />,
              },
              {
                title: 'Todo',
                itemId: '/todo',
                elemBefore: () => <BsCardChecklist />,
              }
            ]}
          />
        </aside>
    );
};

export default MainAside;