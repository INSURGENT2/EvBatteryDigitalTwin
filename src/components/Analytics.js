
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { BarChart, Bar } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AlertCircle, BarChart2, TrendingUp, Activity } from "lucide-react"

const API_BASE_URL = 'http://localhost:5000';  // Replace with your actual API base URL

const Dashboard = () => {
  const [modelPerformance, setModelPerformance] = useState(null);
  const [featureImportance, setFeatureImportance] = useState(null);
  const [confusionMatrix, setConfusionMatrix] = useState(null);
  const [efficiencyScatter, setEfficiencyScatter] = useState(null);
  const [anomalies, setAnomalies] = useState(null);
  const [errors, setErrors] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const performanceResponse = await axios.get(`${API_BASE_URL}/model_performance`);
        setModelPerformance(performanceResponse.data);

        const featureImportanceResponse = await axios.get(`${API_BASE_URL}/feature_importance`);
        setFeatureImportance(JSON.parse(featureImportanceResponse.data));

        const confusionMatrixResponse = await axios.get(`${API_BASE_URL}/confusion_matrix`);
        setConfusionMatrix(JSON.parse(confusionMatrixResponse.data));

        const efficiencyScatterResponse = await axios.get(`${API_BASE_URL}/efficiency_scatter`);
        setEfficiencyScatter(JSON.parse(efficiencyScatterResponse.data));

        const anomaliesResponse = await axios.get(`${API_BASE_URL}/anomalies`);
        setAnomalies(anomaliesResponse.data);

        const errorsResponse = await axios.get(`${API_BASE_URL}/error_detection`);
        setErrors(errorsResponse.data.errors);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const renderPerformanceMetrics = () => {
    if (!modelPerformance) return null;

    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Defect Accuracy
            </CardTitle>
            <AlertCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{(modelPerformance.defect_accuracy * 100).toFixed(2)}%</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Efficiency R²
            </CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{modelPerformance.efficiency_r2.toFixed(4)}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Efficiency MSE
            </CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{modelPerformance.efficiency_mse.toFixed(4)}</div>
          </CardContent>
        </Card>
      </div>
    );
  };

  const renderFeatureImportance = () => {
    if (!featureImportance) return null;

    return (
      <Card className="mt-4">
        <CardHeader>
          <CardTitle>Feature Importance</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={featureImportance.data} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" />
              <YAxis dataKey="y" type="category" />
              <Tooltip />
              <Legend />
              <Bar dataKey="x" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    );
  };

  const renderConfusionMatrix = () => {
    if (!confusionMatrix) return null;

    return (
      <Card className="mt-4">
        <CardHeader>
          <CardTitle>Confusion Matrix</CardTitle>
        </CardHeader>
        <CardContent>
          <div dangerouslySetInnerHTML={{ __html: confusionMatrix.data[0].data }} />
        </CardContent>
      </Card>
    );
  };

  const renderEfficiencyScatter = () => {
    if (!efficiencyScatter) return null;

    return (
      <Card className="mt-4">
        <CardHeader>
          <CardTitle>Efficiency Prediction Performance</CardTitle>
        </CardHeader>
        <CardContent>
          <div dangerouslySetInnerHTML={{ __html: efficiencyScatter.data[0].data }} />
        </CardContent>
      </Card>
    );
  };

  const renderAnomalies = () => {
    if (!anomalies) return null;

    return (
      <Card className="mt-4">
        <CardHeader>
          <CardTitle>Anomaly Detection</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Number of anomalies: {anomalies.num_anomalies}</p>
          <p>Percentage of anomalies: {anomalies.anomaly_percentage.toFixed(2)}%</p>
        </CardContent>
      </Card>
    );
  };

  const renderErrors = () => {
    if (!errors) return null;

    return (
      <Card className="mt-4">
        <CardHeader>
          <CardTitle>Error Detection</CardTitle>
        </CardHeader>
        <CardContent>
          <ul>
            {errors.map((error, index) => (
              <li key={index}>{error}</li>
            ))}
          </ul>
        </CardContent>
      </Card>
    );
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">EV Module Assembly Analysis Dashboard</h1>
      <Tabs defaultValue="performance" className="w-full">
        <TabsList>
          <TabsTrigger value="performance">Performance</TabsTrigger>
          <TabsTrigger value="features">Features</TabsTrigger>
          <TabsTrigger value="predictions">Predictions</TabsTrigger>
          <TabsTrigger value="anomalies">Anomalies</TabsTrigger>
        </TabsList>
        <TabsContent value="performance">
          {renderPerformanceMetrics()}
        </TabsContent>
        <TabsContent value="features">
          {renderFeatureImportance()}
        </TabsContent>
        <TabsContent value="predictions">
          {renderConfusionMatrix()}
          {renderEfficiencyScatter()}
        </TabsContent>
        <TabsContent value="anomalies">
          {renderAnomalies()}
          {renderErrors()}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Analytics;