import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Card, Button, Form, Tabs, Tab } from 'react-bootstrap';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

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

const generateRandomData = () => ({
  No_Defect: Math.floor(Math.random() * 10) + 1, // Whole number between 1 and 10
  Minor_Defect: Math.floor(Math.random() * 10) + 1, // Whole number between 1 and 10
  Major_Defect: Math.floor(Math.random() * 10) + 1, // Whole number between 1 and 10
  Efficiency: (Math.random() * (95 - 80) + 80).toFixed(2), // Value between 80 and 95
});

const WhatIfScenario = () => {
  const [inputs, setInputs] = useState({
    cellVoltage: null,
    cellImpedance: null,
    cellCapacity: null,
    compressionForce: null,
    weldingCurrent: null,
    weldingTime: null,
    torque: null,
    assemblyTime: null,
    leakageRate: null,
  });

  const [optimizeInputs, setOptimizeInputs] = useState(
    Object.keys(parameterConfig).reduce((acc, key) => {
      acc[key] = null;
      return acc;
    }, {})
  );

  const [selectedMode, setSelectedMode] = useState('whatIf');
  const [graphData, setGraphData] = useState(null);
  const [output, setOutput] = useState(null);
  const [optimizeParam, setOptimizeParam] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prevState) => ({
      ...prevState,
      [name]: Number(value),
    }));
  };

  const handleOptimizeChange = (e) => {
    setOptimizeParam(e.target.value);
    setOptimizeInputs(
      Object.keys(parameterConfig).reduce((acc, key) => {
        acc[key] = null;
        return acc;
      }, {})
    );
  };

  const handleOptimizeInputChange = (e) => {
    const { name, value } = e.target;
    setOptimizeInputs((prevState) => ({
      ...prevState,
      [name]: Number(value),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedMode === 'optimizer') {
      const optimizedValue = 100.6575438627952; // Placeholder optimized value
      setOutput({ optimal_value: optimizedValue });
    } else if (selectedMode === 'whatIf') {
      setGraphData(generateRandomData());
    }
  };

  const graphLabels = ['No Defect', 'Minor Defect', 'Major Defect', 'Efficiency'];
  const chartData = {
    labels: graphLabels,
    datasets: [
      {
        label: 'What-If Scenario',
        data: graphData ? Object.values(graphData) : [0, 0, 0, 0],
        backgroundColor: ['#00ff00', '#ffff00', '#ff0000', '#00bfff'],
        borderColor: '#ffffff',
        borderWidth: 1,
      },
    ],
  };

  const handleTabSelect = (k) => {
    setSelectedMode(k);
  };

  return (
    <div className="container mt-5" style={{ paddingTop: '60px', backgroundColor: '#000000', color: '#00ff00' }}>
      <h1 className="mb-4" style={{ fontSize: '1.5rem', maxWidth: '90%' }}>What-If and Optimization Analysis</h1>
      <Card style={{ backgroundColor: '#1a1a1a', color: '#00ff00' }}>
        <Card.Header>
          <Tabs activeKey={selectedMode} onSelect={handleTabSelect} className="mb-3">
            <Tab eventKey="whatIf" title={<span style={{ color: selectedMode === 'whatIf' ? '#000000' : '#00ff00' }}>What-If</span>} />
            <Tab eventKey="optimizer" title={<span style={{ color: selectedMode === 'optimizer' ? '#000000' : '#00ff00' }}>Optimizer</span>} />
          </Tabs>
        </Card.Header>
        <Card.Body>
          {selectedMode === 'whatIf' && (
            <Form onSubmit={handleSubmit}>
              {Object.keys(inputs).map((key) => (
                <Form.Group controlId={key} key={key} className="mb-3">
                  <Form.Label>
                    {key.replace(/([A-Z])/g, ' $1').replace(/^./, (str) => str.toUpperCase())}:
                    <span style={{ marginLeft: '10px', fontWeight: 'bold' }}>
                      {inputs[key] !== null ? `${inputs[key]} ${parameterConfig[key].unit}` : 'Null'}
                    </span>
                  </Form.Label>
                  <Form.Range
                    name={key}
                    value={inputs[key] !== null ? inputs[key] : parameterConfig[key].min}
                    min={parameterConfig[key].min}
                    max={parameterConfig[key].max}
                    step={parameterConfig[key].step}
                    onChange={handleChange}
                    style={{ color: '#00ff00' }}
                  />
                </Form.Group>
              ))}
              <div style={{ marginBottom: '20px', height: '300px' }}>
                <Line data={chartData} options={{ responsive: true, plugins: { legend: { display: false } } }} />
              </div>
              <Button type="submit" variant="success" style={{ width: '100%' }}>
                Submit
              </Button>
            </Form>
          )}

          {selectedMode === 'optimizer' && (
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="optimizeParam" className="mb-3">
                <Form.Label>
                  Select Parameter to Optimize:
                  <Form.Select value={optimizeParam} onChange={handleOptimizeChange} style={{ marginTop: '5px' }}>
                    <option value="">Select a parameter</option>
                    {Object.keys(inputs).map((key) => (
                      <option key={key} value={key}>
                        {key.replace(/([A-Z])/g, ' $1').replace(/^./, (str) => str.toUpperCase())}
                      </option>
                    ))}
                  </Form.Select>
                </Form.Label>
              </Form.Group>
              {Object.keys(optimizeInputs).map(
                (key) =>
                  key !== optimizeParam && (
                    <Form.Group controlId={key} key={key} className="mb-3">
                      <Form.Label>
                        {key.replace(/([A-Z])/g, ' $1').replace(/^./, (str) => str.toUpperCase())}:
                        <span style={{ marginLeft: '10px', fontWeight: 'bold' }}>
                          {optimizeInputs[key] !== null ? `${optimizeInputs[key]} ${parameterConfig[key].unit}` : 'Null'}
                        </span>
                      </Form.Label>
                      <Form.Range
                        name={key}
                        value={optimizeInputs[key] || parameterConfig[key].min}
                        min={parameterConfig[key].min}
                        max={parameterConfig[key].max}
                        step={parameterConfig[key].step}
                        onChange={handleOptimizeInputChange}
                        style={{ color: '#00ff00' }}
                      />
                    </Form.Group>
                  )
              )}
              {output && (
                <div style={{ marginTop: '10px', padding: '10px', backgroundColor: '#000000', borderRadius: '4px', border: '1px solid #00ff00' }}>
                  <p style={{ textAlign: 'center', color: '#ffffff' }}>Optimal Value: {output.optimal_value.toFixed(2)}</p>
                </div>
              )}
              <Button type="submit" variant="success" style={{ width: '100%' }}>
                Submit
              </Button>
            </Form>
          )}
        </Card.Body>
      </Card>
    </div>
  );
};

export default WhatIfScenario;
