import exp from 'constants';
import {createBrowserRouter, Navigate} from 'react-router-dom';
import One from '../page/one';
import Two from '../page/two';

const router = createBrowserRouter([
    {
        path:'/',
        element: <One></One>
    },
    {
        path:'/list',
        element: <Two/>,
        children:[
        ]
    },
])
export default router