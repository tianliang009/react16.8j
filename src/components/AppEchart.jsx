import * as echarts from 'echarts';
import { useEffect } from "react";
import getMap from '../api/getMap';
const AppEchart = () => {
    const setChart = () => {
        let mixDom = document.getElementById('echartBox')
        let MixChart = echarts.init(mixDom)
        MixChart.clear()
        let option = null
        getMap.then(res => {
            echarts.registerMap('CC', res.data)
            option = {
                visualMap: {
                    min: 1000,
                    max: 30000,
                    realtime: false,
                    calculable: true,
                    inRange: {
                      color: ['lightskyblue', 'yellow', 'orangered']
                    }
                },
                title:{ text:'长春市统计图' }, // 标题
                tooltip: {}, // 提示框
                series: [{
                    name: '地图',
                    type: 'map',
                    map: 'CC',
                    label: {
                        show: true
                    },
                    data: [
                        { name: "白城市", value: 10000 },
                        { name: "松原市", value: 20000 },
                        { name: "长春市", value: 30000 },
                        { name: "四平市", value: 1 },
                        { name: "辽源市", value: 5000 },
                        { name: "吉林市", value: 4000 },
                        { name: "通化市", value: 12001 },
                        { name: "白山市", value: 666 },
                        { name: "延边朝鲜族自治州", value: 777 },
                    ]
                }]
            }
            MixChart.resize()
            option && MixChart.setOption(option);
        })
    }

    useEffect( () => {
        setChart();
    }, [])
    return (
        <div id="echartBox" style={{width: "600px",height:"600px"}}></div>
    );
}
export default AppEchart;