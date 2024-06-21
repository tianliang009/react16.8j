import React from 'react';
import { Layout } from '@douyinfe/semi-ui';
import VisualizationNavbar from '../../components/Visualization/VisualizationNavbar';
import { useEffect } from 'react';
import { useState } from 'react';

// const { Header, Footer, Sider, Content } = Layout;
// const commonStyle = {
//     height: 64,
//     lineHeight: '64px',
//     background: 'var(--semi-color-fill-0)'
// };
const Visualization = () => {
    const [num, setNum] = useState(-570)
    useEffect(() => {

    })
    return (
        <div className='simulation'>
            <div className='simulation-con'>
                <div className='hardware-wrapper-left' style={{ left: num+'px' }}></div>
                <div className='hardware-wrapper-right' style={{ right: num+'px' }}></div>
            </div>
            <button onClick={() => {setNum(0)}}>进来</button>
            <button onClick={() => {setNum(-570)}}>回去</button>
        </div>
        // <Layout className="components-layout-demo">
        //     <Sider>
        //         <VisualizationNavbar />
        //     </Sider>
        //     <Layout>
        //         <Header style={commonStyle}>Header</Header>
        //         <Content style={{ height: 300, lineHeight: '300px' }}>Content</Content>
        //         <Footer style={commonStyle}>Footer</Footer>
        //     </Layout>
        //     <Sider style={{ width: '300px' }}></Sider>
        // </Layout>
    );
};
export default Visualization;