import { useState, useEffect } from 'react';
import './App.css';
import Chart1 from './pages/Chart1';
import Chart2 from './pages/Chart2';
import Chart3 from './pages/Chart3';
import Comparison from './pages/Comparison';
import Data from './assets/frontend_intern_project_data';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppRoutes from './AppRoutes';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppRoutes />}>
            <Route index element={<Chart1 data={Data} />} />
            <Route path="chart2" element={<Chart2 data={Data}/>} />
            <Route path="chart3" element={<Chart3 data={Data}/>} />
            <Route path="comp" element={<Comparison data={Data}/>} />
            {/* <Route path="*" element={<NoPage />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
