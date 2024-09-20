import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Card, Button, Tabs, Tab } from 'react-bootstrap';
import { AlertCircle, TrendingUp, Activity } from "lucide-react";

const generateFakeData = () => ({
  data: [
    { y: 'Cell Voltage', x: Math.random() },
    { y: 'Cell Impedance', x: Math.random() },
    { y: 'Cell Capacity', x: Math.random() },
    { y: 'Compression Force', x: Math.random() },
    { y: 'Welding Current', x: Math.random() },
    { y: 'Welding Time', x: Math.random() },
    { y: 'Torque', x: Math.random() },
    { y: 'Assembly Time', x: Math.random() },
    { y: 'Leakage Rate', x: Math.random() }
  ]
});

const Analytics = () => {
  const [data, setData] = useState(generateFakeData());
  const [key, setKey] = useState('performance');
  const [activeButton, setActiveButton] = useState('performance');

  useEffect(() => {
    const interval = setInterval(() => {
      setData(generateFakeData());
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const renderPerformanceMetrics = () => {
    const metrics = {
      defect_accuracy: Math.random(),
      efficiency_r2: Math.random(),
      efficiency_mse: Math.random() * 10
    };

    return (
      <div className="row mb-4">
        <div className="col-md-4">
          <Card style={{ backgroundColor: '#1a1a1a', color: '#00ff00' }}>
            <Card.Header className="d-flex justify-content-between align-items-center">
              <h6>Defect Accuracy</h6>
              <AlertCircle className="text-accent" />
            </Card.Header>
            <Card.Body>
              <h4>{(metrics.defect_accuracy * 100).toFixed(2)}%</h4>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-4">
          <Card style={{ backgroundColor: '#1a1a1a', color: '#00ff00' }}>
            <Card.Header className="d-flex justify-content-between align-items-center">
              <h6>Efficiency R²</h6>
              <TrendingUp className="text-accent" />
            </Card.Header>
            <Card.Body>
              <h4>{metrics.efficiency_r2.toFixed(4)}</h4>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-4">
          <Card style={{ backgroundColor: '#1a1a1a', color: '#00ff00' }}>
            <Card.Header className="d-flex justify-content-between align-items-center">
              <h6>Efficiency MSE</h6>
              <Activity className="text-accent" />
            </Card.Header>
            <Card.Body>
              <h4>{metrics.efficiency_mse.toFixed(4)}</h4>
            </Card.Body>
          </Card>
        </div>
      </div>
    );
  };

  const renderFeatureImportance = () => (
    <Card className="mb-4" style={{ backgroundColor: '#1a1a1a', color: '#00ff00' }}>
      <Card.Header>Feature Data</Card.Header>
      <Card.Body>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={data.data} layout="vertical">
            <CartesianGrid strokeDasharray="3 3" stroke="#00ff00" />
            <XAxis type="number" stroke="#00ff00" />
            <YAxis dataKey="y" type="category" width={150} stroke="#00ff00" />
            <Tooltip />
            <Bar dataKey="x" fill="#4caf50" barSize={20} />
          </BarChart>
        </ResponsiveContainer>
      </Card.Body>
    </Card>
  );

  const handleButtonClick = (key) => {
    setKey(key);
    setActiveButton(key);
  };

  return (
    <div className="container mt-5" style={{ paddingTop: '60px', backgroundColor: '#000000', color: '#00ff00' }}>
      <h1 className="mb-4" style={{ fontSize: '1.5rem', maxWidth: '90%' }}>EV Module Assembly Analysis Dashboard</h1>
      <Tabs activeKey={key} onSelect={handleButtonClick} className="mb-3">
        <Tab eventKey="performance" title={<Button variant="link" style={{ color: activeButton === 'performance' ? '#000000' : '#00ff00' }}>Performance</Button>}>
          {key === 'performance' && renderPerformanceMetrics()}
        </Tab>
        <Tab eventKey="features" title={<Button variant="link" style={{ color: activeButton === 'features' ? '#000000' : '#00ff00' }}>Features</Button>}>
          {key === 'features' && renderFeatureImportance()}
        </Tab>
      </Tabs>
    </div>
  );
};

export default Analytics;
