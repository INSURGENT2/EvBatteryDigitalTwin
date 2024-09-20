import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Card, Button, Tabs, Tab } from 'react-bootstrap';
import { AlertCircle, TrendingUp, Activity } from "lucide-react";

// Configuration for parameter ranges
const parameterConfig = {
  cellVoltage: { min: 3.2, max: 4.2, step: 0.1, unit: 'V' },
  cellImpedance: { min: 0.5, max: 2.0, step: 0.1, unit: 'Ω' },
  cellCapacity: { min: 2000, max: 5000, step: 100, unit: 'mAh' },
  compressionForce: { min: 500, max: 2000, step: 50, unit: 'N' },
  weldingCurrent: { min: 100, max: 300, step: 10, unit: 'A' },
  weldingTime: { min: 0.1, max: 1.0, step: 0.1, unit: 's' },
  torque: { min: 5, max: 15, step: 0.5, unit: 'Nm' },
  assemblyTime: { min: 10, max: 30, step: 1, unit: 'min' },
  leakageRate: { min: 0, max: 0.1, step: 0.01, unit: 'cm³/min' },
};

// Function to generate random values based on the parameter configuration
const generateRandomValue = (min, max, step) => {
  const range = (max - min) / step;
  const randomStep = Math.floor(Math.random() * range);
  return (min + randomStep * step).toFixed(2); // Fixed to 2 decimal points
};

// Utility function to format numbers into 'K' notation
const formatValue = (value) => {
  if (value >= 1000) {
    return (value / 1000).toFixed(1) + 'K'; // Format as K
  }
  return value.toString(); // Return as string for other values
};

const generateFakeData = () => {
  const rawData = [
    { y: 'Cell Voltage', x: generateRandomValue(parameterConfig.cellVoltage.min, parameterConfig.cellVoltage.max, parameterConfig.cellVoltage.step) },
    { y: 'Cell Impedance', x: generateRandomValue(parameterConfig.cellImpedance.min, parameterConfig.cellImpedance.max, parameterConfig.cellImpedance.step) },
    { y: 'Cell Capacity', x: generateRandomValue(parameterConfig.cellCapacity.min, parameterConfig.cellCapacity.max, parameterConfig.cellCapacity.step) },
    { y: 'Compression Force', x: generateRandomValue(parameterConfig.compressionForce.min, parameterConfig.compressionForce.max, parameterConfig.compressionForce.step) },
    { y: 'Welding Current', x: generateRandomValue(parameterConfig.weldingCurrent.min, parameterConfig.weldingCurrent.max, parameterConfig.weldingCurrent.step) },
    { y: 'Welding Time', x: generateRandomValue(parameterConfig.weldingTime.min, parameterConfig.weldingTime.max, parameterConfig.weldingTime.step) },
    { y: 'Torque', x: generateRandomValue(parameterConfig.torque.min, parameterConfig.torque.max, parameterConfig.torque.step) },
    { y: 'Assembly Time', x: generateRandomValue(parameterConfig.assemblyTime.min, parameterConfig.assemblyTime.max, parameterConfig.assemblyTime.step) },
    { y: 'Leakage Rate', x: generateRandomValue(parameterConfig.leakageRate.min, parameterConfig.leakageRate.max, parameterConfig.leakageRate.step) },
  ];

  // Format values for display
  return {
    data: rawData.map(item => ({
      ...item,
      xFormatted: formatValue(item.x) // Add formatted value for display
    }))
  };
};

const Analytics = () => {
  const [data, setData] = useState(generateFakeData());
  const [key, setKey] = useState('performance');
  const [activeButton, setActiveButton] = useState('performance');
  const [errorData, setErrorData] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setData(generateFakeData());
      setErrorData(generateRandomErrors());
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const generateRandomErrors = () => {
    const possibleErrors = [
      "Cell_Voltage out of range in 5 samples.",
      "Check cell_voltage control systems and process parameters.",
      "Cell_Impedance out of range in 3 samples.",
      "Check cell_impedance control systems and process parameters.",
      "Cell_Capacity out of range in 1 sample.",
      "Check cell_capacity control systems and process parameters.",
      "Compression_Force out of range in 2 samples.",
      "Check compression_force control systems and process parameters.",
      "Welding_Current out of range in 5 samples.",
      "Check welding_current control systems and process parameters.",
      "Assembly_Time out of range in 5 samples.",
      "Check assembly_time control systems and process parameters.",
      "Leakage_Rate out of range in 71 samples.",
      "Check leakage_rate control systems and process parameters.",
      "Machine vision process parameter anomaly. Check equipment calibration.",
      "Unusual energy density detected in some cells.",
      "Verify cell specifications and quality control processes."
    ];
    
    return possibleErrors
      .sort(() => 0.5 - Math.random())
      .slice(0, Math.floor(Math.random() * 10) + 5);
  };

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
            <Tooltip formatter={(value) => [formatValue(value), '']} />
            <Bar dataKey="x" fill="#4caf50" barSize={20} />
          </BarChart>
        </ResponsiveContainer>
      </Card.Body>
    </Card>
  );

  const renderErrors = () => (
    <Card className="mb-4" style={{ backgroundColor: '#1a1a1a', color: '#00ff00' }}>
      <Card.Header>Detected Errors and Suggested Improvements</Card.Header>
      <Card.Body>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {errorData.map((error, index) => (
            <li key={index} style={{ marginBottom: '10px' }}>• {error}</li>
          ))}
        </ul>
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
        <Tab eventKey="errors" title={<Button variant="link" style={{ color: activeButton === 'errors' ? '#000000' : '#00ff00' }}>Errors</Button>}>
          {key === 'errors' && renderErrors()}
        </Tab>
      </Tabs>
    </div>
  );
};

export default Analytics;