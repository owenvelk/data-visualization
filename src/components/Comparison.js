import {Typography, Card} from '@mui/material';
import ReactEcharts from 'echarts-for-react';
import '../App.css';

export default function Comparison(props) {
    return (
        <div className='Page'>
            <Typography sx={{fontSize: 24}}>Comparison</Typography>
            <Card className='Chart'>
                <ReactEcharts option={props.pieOptions} />
            </Card>
            <Card className='Chart'>
                <ReactEcharts option={props.barOptions} />
            </Card>
            <Card className='Chart'>
                <ReactEcharts option={props.lineOptions} />
            </Card>
        </div>
    );
}