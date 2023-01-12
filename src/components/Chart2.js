import { useState } from 'react';
import {Typography, Card, Button} from '@mui/material';
import ReactEcharts from 'echarts-for-react';
import MyModal from './MyModal';
import '../App.css';

export default function Chart2(props) {
    return (
        <div className="Page">
            <Typography sx={{fontSize: 24}}>Chart 2</Typography>
            <Card className="Chart">
                <ReactEcharts option={props.options} />
            </Card>
            <Button
                sx={{backgroundColor: 'white', '&:hover': {backgroundColor: 'lightgrey'}}}
                onClick={props.toggle}
            >
                Toggle Dataset
            </Button>
            <MyModal modalOptions={props.modalOptions}/>
        </div>
    );
}