/** @jsxImportSource @emotion/react */
import React from 'react';
import { Navigation } from "react-minimal-side-navigation/lib";
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';
import { HiHome } from 'react-icons/hi';
import { GrTest } from 'react-icons/gr';
import { BsCardChecklist } from 'react-icons/bs';
import { BiListCheck } from 'react-icons/bi';
import * as S from './style';

const MainAside = () => {
    return (
        <aside css={S.style}>
            <Navigation
            // you can use your own router's api to get pathname
            activeItemId="/"
            onSelect={({itemId}) => {
                console.log(itemId)
              // maybe push to the route
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
                itemId: '/sample',
                elemBefore: () => <BsCardChecklist />,
                subNav: [
                    {
                        title: 'input1',
                        itemId: '/sample/input/1',
                        elemBefore: () => <BiListCheck />
                    }
                ]
              }
            ]}
          />
        </aside>
    );
};

export default MainAside;