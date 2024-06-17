import { Tabs, TabPane } from '@douyinfe/semi-ui';
import AppCalendar from './AppCalendar';
import AppTable from './AppTable';

const AppContent = () => {
    return (
        <div>
            <Tabs type="line">
                <TabPane tab="表格" itemKey="1">
                    <AppTable />
                </TabPane>
                <TabPane tab="日历" itemKey="2">
                    <AppCalendar />
                </TabPane>
            </Tabs>
        </div>
    );
}
export default AppContent;