import EaseFir from "../components/GreenSock/EaseFir";
import { Tabs, TabPane, Divider } from '@douyinfe/semi-ui';
import EaseSec from "../components/GreenSock/EaseSec";
import EaseThi from "../components/GreenSock/EaseThi";
import TimeLineFir from "../components/GreenSock/TimeLineFir";

const GreenSock = () => {
    return(
        <div className="App">
            <Tabs type="line" style={{padding: '0 20px'}}>
                <TabPane tab="关键帧的动画曲线" itemKey="1">
                    <EaseFir />
                    <Divider margin='12px'/>
                    <EaseSec />
                    <Divider margin='12px'/>
                    <EaseThi />
                </TabPane>
                <TabPane tab="时间线" itemKey="2">
                    <TimeLineFir />
                </TabPane>
                <TabPane tab="图表" itemKey="3">
                    <div>3</div>
                </TabPane>
                <TabPane tab="格远" itemKey='4'>
                    <div>4</div>
                </TabPane>
            </Tabs>
        </div>
    );
}
export default GreenSock;