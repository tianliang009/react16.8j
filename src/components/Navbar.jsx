import { Nav } from '@douyinfe/semi-ui';
import { IconSemiLogo } from '@douyinfe/semi-icons';
import { IconDescriptions, IconTree, IconAvatar } from '@douyinfe/semi-icons-lab';
import { useAtom } from "jotai";
import { useNavigate } from "react-router-dom";
import { BrowserRouter as Router, Route, NavLink ,Routes} from 'react-router-dom'


export default function Navbar () {
    // const [router] = useAtom(routerAtom);
    // const navigate = useNavigate()
    
    // 默认明暗色模式
    const body = document.body;
    body.setAttribute('theme-mode', 'dark');

    const switchMode = (data) => {
        if(data.itemKey === "theme") {
            const body = document.body;
            if (body.hasAttribute('theme-mode')) {
                body.removeAttribute('theme-mode');
            } else {
                body.setAttribute('theme-mode', 'dark');
            }
        }
    };


    return (
        <Nav
            bodyStyle={{ height: 780 }}
            defaultSelectedKeys={[location.pathname || "/"]}
            items={
                true ? // 权限区分 
                [
                    { itemKey: '/one', text: '第一个', icon: <IconAvatar /> },
                    { itemKey: '/two', text: '第二个', icon: <IconAvatar /> },
                    { itemKey: 'user', text: '用户管理', icon: <IconAvatar /> },
                    { itemKey: 'union', text: '活动管理', icon: <IconDescriptions /> },
                    {
                        text: '任务平台',
                        icon: <IconTree />,
                        itemKey: 'job',
                        items: ['任务管理', '用户任务查询'],
                    },
                    { itemKey: "theme", text: '切换主题', icon: '💡' }
                ] : [
                    { itemKey: 'user', text: '用户管理', icon: <IconAvatar /> },
                    { itemKey: "theme", text: '切换主题', icon: '💡' }
                ]
            }
            footer={{
                collapseButton: true,
            }}
            onSelect={(data) => {
                console.log(data.itemKey.toString());
                // navigate(data.itemKey.toString());
            }}
            onClick={data => switchMode(data)}
        />
    );
}