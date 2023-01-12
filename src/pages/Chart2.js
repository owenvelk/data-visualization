import {Typography, Card} from '@mui/material';
import ReactEcharts from 'echarts-for-react';

export default function Chart2(props) {
    const data = props.data.data;

    return (
        <div className="Page">
            <Typography>Chart 2</Typography>
            {/* <Typography>{data.Levels.XData}</Typography>
            <Card>
                <ReactEcharts 
                    option={{
                        xAxis: {
                            type: 'category',
                            data: data.Levels.XData
                        },
                        yAxis: {
                            type: 'value'
                        },
                        series: [{ 
                            data: data.Levels.YData,
                            type: 'bar',
                        }]
                    }}
                />
            </Card> */}
        </div>
    );
}