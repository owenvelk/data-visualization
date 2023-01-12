import { useState, useLayoutEffect } from 'react';
import {Typography, Card} from '@mui/material';
import ReactEcharts from 'echarts-for-react';
import '../App.css';

export default function Chart1(props) {
    return (
        <div className="Page">
            <Typography sx={{fontSize: 24}}>Chart 1</Typography>
            <Card className="Chart">
                <ReactEcharts option={props.options}/>
            </Card>
        </div>
    );
}