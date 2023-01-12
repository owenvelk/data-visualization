import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Chart1 from './components/Chart1';
import Chart2 from './components/Chart2';
import Chart3 from './components/Chart3';
import Comparison from './components/Comparison';
import NoPage from './components/NoPage';
import Data from './assets/frontend_intern_project_data';
import AppRoutes from './AppRoutes';

function App() {
  const data = Data.data;
  const sets = Object.keys(data);
  const [ind, setInd] = useState(0);
  // const [label, setLabel] = useState(sets[ind]);

  const pieOptions = {
    title: {
        text: sets[ind],
        left: 'center'
    },
    tooltip: {
        trigger: 'item'
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        right: 5,
        top: 5
    },
    series: [{ 
        name: 'pieData',
        data: mapData(),
        type: 'pie',
        radius: '50%',
    }]
  };
  const barOptions = {
    title: {
      text: sets[ind],
      left: 'center'
    },
    xAxis: {
        type: 'category',
        data: data[sets[ind]].XData
    },
    yAxis: {
        type: 'value'
    },
    series: [{ 
        data: data[sets[ind]].YData,
        type: 'bar',
    }]
  };
  const lineOptions = {
    title: {
      text: sets[ind],
      left: 'center'
    },
    xAxis: {
        type: 'category',
        data: data[sets[ind]].XData
    },
    yAxis: {
        type: 'value'
    },
    series: [{ 
        data: data[sets[ind]].YData,
        type: 'line',
    }]
  };

  const chartStyle = {
    height: '50vh',
    width: '90vw',
    
  }

  function mapData() {
    let mapping = [];
    for (let i = 0; i < data[sets[ind]].XData.length; i++) {
        let jsonData = {
            "name": data[sets[ind]].XData[i],
            "value": data[sets[ind]].YData[i]
        };
        mapping.push(jsonData);
    }
    // console.log(mapping[0]);
    return mapping;
  };

  function handleToggle() {
    if (ind == sets.length - 1) {
      setInd(0);
    } else {
      setInd(ind + 1);
    }
    // console.log(ind);
  };

  return (
    <div className="App">
      <AppRoutes />
      <Routes>
        <Route path="/" element={<Chart1 options={pieOptions} style={chartStyle} />} />
        <Route path="chart2" element={<Chart2 options={barOptions} toggle={handleToggle} modalOptions={pieOptions} style={chartStyle} />} />
        <Route path="chart3" element={<Chart3 options={lineOptions} modalOptions={pieOptions} style={chartStyle} />} />
        <Route path="comp" element={<Comparison pieOptions={pieOptions} barOptions={barOptions} lineOptions={lineOptions} style={chartStyle} />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </div>
  );
}

export default App;
