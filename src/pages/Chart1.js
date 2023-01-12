import {Typography, Card} from '@mui/material';
import ReactEcharts from 'echarts-for-react';

export default function Chart1(props) {
    const data = props.data.data;

    return (
        <div className="Page">
            <Typography>Levels</Typography>
            <Card className="Chart">
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
            </Card>
        </div>
    );
}