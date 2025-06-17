import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProcessSteps from './components/ProcessSteps';
import OperatorCharging from './components/OperatorCharging';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-purple-700">
      <Header />
      <Hero />
      <ProcessSteps />
      <OperatorCharging />
    </div>
  );
}

export default App;