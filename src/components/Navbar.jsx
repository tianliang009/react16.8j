import { Nav } from '@douyinfe/semi-ui';
// import { IconSemiLogo } from '@douyinfe/semi-icons';
import { IconDescriptions, IconTree, IconAvatar } from '@douyinfe/semi-icons-lab';
import { useNavigate } from 'react-router-dom';


const Navbar = () => {
    const navigate = useNavigate();
    // const switchMode = (data) => {
    //     if(data.text === "theme") {
    //         const body = document.body;
    //         if (body.hasAttribute('theme-mode')) {
    //             body.removeAttribute('theme-mode');
    //         } else {
    //             body.setAttribute('theme-mode', 'dark');
    //         }
    //     }
    // };
    const items = [
        { itemKey: '/data', text: '数据管理', icon: '📊' },
        { itemKey: '/user', text: '用户管理', icon: <IconAvatar /> },
        { itemKey: '/activity', text: '活动管理', icon: <IconDescriptions /> },
        {
            itemKey: '/com',
            text: '任务平台',
            icon: <IconTree />,
            items: [
                { itemKey: '/companyTasks', text: '公司任务', icon: '💼' },
                { itemKey: '/userTasks', text: '用户任务查询', icon: '🏠' },
            ],
        },
        { itemKey: '/greenSock', text: 'GreenSock', icon: '🍀' },
        // { itemKey: "/theme", text: '切换主题', icon: '🌗' },
    ]

    const goRoute = (e) => {
        navigate(e)
    }

    return (
        <Nav
            bodyStyle={{ height: 780 }}
            items={ items }
            footer={{
                collapseButton: true,
            }}
            onSelect={data => goRoute(data.itemKey)}
            // onClick={switchMode}
        />
    );
}
export default Navbar;