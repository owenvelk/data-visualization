import {Typography, Card} from '@mui/material';
import ReactEcharts from 'echarts-for-react';
import '../App.css';
import MyModal from './MyModal';

export default function Chart3(props) {
    return (
        <div className="Page">
            <Typography sx={{fontSize: 24}}>Chart 3</Typography>
            <Card className="Chart">
                <ReactEcharts option={props.options} style={props.style} />
            </Card>
            <MyModal modalOptions={props.modalOptions} style={props.style} />
        </div>
    );
}