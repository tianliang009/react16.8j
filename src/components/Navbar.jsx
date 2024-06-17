import { Nav } from '@douyinfe/semi-ui';
import { IconSemiLogo } from '@douyinfe/semi-icons';
import { IconDescriptions, IconTree, IconAvatar } from '@douyinfe/semi-icons-lab';

const Navbar = () => {
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
            bodyStyle={{ height: 320 }}
            items={[
                { itemKey: 'user', text: '用户管理', icon: <IconAvatar /> },
                { itemKey: 'union', text: '活动管理', icon: <IconDescriptions /> },
                {
                    text: '任务平台',
                    icon: <IconTree />,
                    itemKey: 'job',
                    items: ['任务管理', '用户任务查询'],
                },
                { itemKey: "theme", text: '切换主题', icon: '💡' },
            ]}
            header={{
                logo: <IconSemiLogo style={{ height: '36px', fontSize: 36 }} />,
                text: 'Semi 运营后台'
            }}
            footer={{
                collapseButton: true,
            }}
            onSelect={data => console.log('trigger onSelect: ', data)}
            onClick={switchMode}
        />
    );
}
export default Navbar;