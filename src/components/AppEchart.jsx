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
                series: [{
                    name: '地图',
                    type: 'map',
                    map: 'CC',
                    label: {
                        show: true
                    }
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