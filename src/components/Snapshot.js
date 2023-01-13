import { Typography, Card } from "@mui/material";
import { useEffect, useState } from "react";
import ReactEcharts from 'echarts-for-react';
import '../App.css';

export default function Snapshot(props) {
    const [Xdata, setXdata] = useState({});
    const [Ydata, setYdata] = useState({});
    const [loaded, setLoaded] = useState(false);
    const [error, setError] = useState(null);
    const options = {
        title: {
            text: 'Tesla stock snapshot from the past day',
            left: 'center'
          },
          xAxis: {
              type: 'category',
              data: Xdata,
          },
          yAxis: {
              type: 'value'
          },
          series: [{ 
              data: Ydata,
              type: 'line',
          }]
    }

    useEffect(() => {
        fetch('http://api.allorigins.win/get?url=https://query1.finance.yahoo.com/v8/finance/chart/tsla?&interval=1m&range=1d')
        .then(response => response.json())
        .then((result) => {
            let contents = JSON.parse(result.contents);
            setXdata(contents.chart.result[0].timestamp);
            setYdata(contents.chart.result[0].indicators.quote[0].open);
            setLoaded(true);
        },
        (error) => {
            setLoaded(true);
            setError(error);
        })
    }, []);

    return (
        loaded && <div className='Page'>
            <Typography sx={{fontSize: 24}}> Stock Snapshot </Typography>
            <Card className="Chart">
                <ReactEcharts option={options} style={props.style} />
            </Card>
        </div>
    );
}