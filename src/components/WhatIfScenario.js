import React, { useState } from 'react';

const WhatIfScenario = () => {
  const [inputs, setInputs] = useState({
    cellVoltage: '',
    cellImpedance: '',
    cellCapacity: '',
    compressionForce: '',
    weldingCurrent: '',
    weldingTime: '',
    torque: '',
    assemblyTime: '',
    leakageRate: '',
  });

  const [optimizeParam, setOptimizeParam] = useState('');
  const [output, setOutput] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleOptimizeChange = (e) => {
    setOptimizeParam(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Input values:', inputs);
    console.log('Optimizing for:', optimizeParam);

    // Example output logic based on optimizeParam
    if (optimizeParam) {
      const result = {
        optimal_value: 100.6575438627952,
        predicted_outcome: {
          defect_probability: {
            No_Defect: 3,
            Minor_Defect: 0,
            Major_Defect: 0,
            Critical_Defect: 0
          },
          efficiency_score: 90.29167320684708
        }
      };
      setOutput(result);
    } else {
      setOutput(null);
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>What-if Scenario</h1>
      <form onSubmit={handleSubmit} style={styles.form}>
        {Object.keys(inputs).map((key) => (
          <label key={key} style={styles.label}>
            {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}:
            <input 
              type="number" 
              name={key} 
              value={inputs[key]} 
              onChange={handleChange} 
              style={styles.input}
            />
          </label>
        ))}

        <div style={styles.optimizeContainer}>
          <h2 style={styles.optimizeHeader}>Optimize Parameter</h2>
          <label style={styles.label}>
            Select Parameter:
            <select value={optimizeParam} onChange={handleOptimizeChange} style={styles.select}>
              <option value="">Select a parameter</option>
              {Object.keys(inputs).map((key) => (
                <option key={key} value={key}>
                  {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                </option>
              ))}
            </select>
          </label>
          <div style={styles.outputContainer}>
            {output ? (
              <div>
                <p style={styles.outputText}>Optimal Value: {output.optimal_value.toFixed(2)}</p>
                <p style={styles.outputText}>Defect Probability:</p>
                <ul>
                  {Object.entries(output.predicted_outcome.defect_probability).map(([key, value]) => (
                    <li key={key}>{key.replace(/_/g, ' ')}: {value}</li>
                  ))}
                </ul>
                <p style={styles.outputText}>Efficiency Score: {output.predicted_outcome.efficiency_score.toFixed(2)}</p>
              </div>
            ) : (
              <p style={styles.outputText}>Output will be displayed here...</p>
            )}
          </div>
        </div>

        <button type="submit" style={styles.button}>Submit</button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
    backgroundColor: '#000000', // Black background
    borderRadius: '8px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.3)',
    color: '#ffffff', // White text
  },
  header: {
    textAlign: 'center',
    color: '#00ff00', // Green header
    marginBottom: '20px', // Added margin for space below header
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  label: {
    marginBottom: '15px',
    color: '#ffffff', // White text for labels
  },
  input: {
    width: '50%', // Smaller input width
    padding: '10px',
    border: '1px solid #00ff00', // Green border
    borderRadius: '4px',
    backgroundColor: '#1a1a1a', // Dark input background
    color: '#ffffff', // White text for inputs
  },
  optimizeContainer: {
    marginTop: '30px',
    padding: '20px',
    backgroundColor: '#1a1a1a', // Darker background for the optimize section
    borderRadius: '8px',
    color: '#ffffff',
  },
  optimizeHeader: {
    textAlign: 'center',
    color: '#00ff00', // Green header for optimize section
  },
  select: {
    width: '50%', // Smaller select width
    padding: '10px',
    border: '1px solid #00ff00', // Green border
    borderRadius: '4px',
    backgroundColor: '#1a1a1a', // Dark select background
    color: '#ffffff', // White text for select
  },
  outputContainer: {
    marginTop: '20px',
    padding: '10px',
    backgroundColor: '#000000', // Black background for output area
    borderRadius: '4px',
    border: '1px solid #00ff00', // Green border for output area
  },
  outputText: {
    textAlign: 'center',
    color: '#ffffff',
  },
  button: {
    marginTop: '20px',
    padding: '10px 20px',
    backgroundColor: '#00ff00', // Green button
    color: '#000000', // Black text for button
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '16px',
  }
};

export default WhatIfScenario;
