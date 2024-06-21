import { useEffect } from 'react';
import { Nav } from '@douyinfe/semi-ui';
import { IconStar, IconUser, IconUserGroup, IconSetting, IconEdit, IconFaceuLogo, IconLanguage, IconSemiLogo } from '@douyinfe/semi-icons';
import { useState } from 'react';

const VisualizationNavbar = () => {
    const items = [
        { itemKey: 'dashboard', text: 'Dashboard', icon: <IconFaceuLogo /> },
        { itemKey: 'activity', text: 'Activity', icon: <IconStar /> },
        { itemKey: 'settings', text: 'Settings', icon: <IconSetting /> },
        // {
        //     itemKey: 'union-management',
        //     text: '任务管理',
        //     icon: <IconUserGroup />,
        //     items: [{
        //         text: '任务1',
        //         icon: <IconSetting/>,
        //         itemKey: 'mission1',
        //     },{
        //         text: '任务2',
        //         icon: <IconEdit/>,
        //         itemKey: 'mission2',
        //     }]
        // },
    ]
    const [heiNum, setHei] = useState();

    useEffect( () => {
        let hei = window.innerHeight;
        setHei(hei - 192)
    }, [])

    return(
        <Nav
            className='nav-text'
            bodyStyle={{ height: heiNum }}
            header={{
                logo: <div className='logo' />,
                text: <>
                    <p>Redwhale</p>
                    <span>Growth & Marketing</span>
                </>
            }}
            items={ items }
            footer={{
                collapseButton: true,
            }}
            // onSelect={data => goRoute(data.itemKey)}
        />
    );
}
export default VisualizationNavbar;