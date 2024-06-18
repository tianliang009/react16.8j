// config/router.config.jsx
import React, { Suspense, lazy } from 'react';
import Main from '../page/main';
// import BasicLayout from '../basicLayout' // 通用边栏
const lazyLoad = (src) => <Suspense fallback={<>...</>}>{React.createElement(lazy(src))}</Suspense>;
const routes = [
  {
    index: true,
    element: lazyLoad(() => import('../page/login'))
    // element: <Login />
  },
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: 'data',
        element: lazyLoad(() => import('../components/AppContent'))
      },
      {
        path: 'user',
        element: lazyLoad(() => import('../page/user'))
      },
      {
        path: 'activity',
        element: lazyLoad(() => import('../page/activity'))
      },
      {
        path: 'companyTasks',
        element: lazyLoad(() => import('../page/CompanyTasks'))
      },
      {
        path: 'userTasks',
        element: lazyLoad(() => import('../page/UserTasks'))
      }
    ]
  },
  {
    path: '*',
    element: lazyLoad(() => import('../components/NotFond'))
  }
];

export default routes;