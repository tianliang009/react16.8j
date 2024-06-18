import { Tabs, TabPane } from '@douyinfe/semi-ui';
import AppCalendar from './AppCalendar';
import AppEchart from './AppEchart';
import AppTable from './AppTable';
import GeYuan from './GeYuan';

const AppContent = () => {
    return (
        <div>
            <Tabs type="line" style={{padding: '0 20px'}}>
                <TabPane tab="表格" itemKey="1">
                    <AppTable />
                </TabPane>
                <TabPane tab="日历" itemKey="2">
                    <AppCalendar />
                </TabPane>
                <TabPane tab="图表" itemKey="3">
                    <AppEchart />
                </TabPane>
                <TabPane tab="格远" itemKey='4'>
                    <GeYuan />
                </TabPane>
            </Tabs>
        </div>
    );
}
export default AppContent;