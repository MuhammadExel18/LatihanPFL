import React from 'react';
import FormGaji from './FormGaji';

function App() {
  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      minHeight: '100vh', 
      backgroundColor: '#f4f7f6',
      fontFamily: 'sans-serif'
    }}>
      <AppContent />
    </div>
  );
}

// Komponen pembungkus agar rapi
const AppContent = () => {
  return (
    <div>
      <FormGaji />
    </div>
  );
};

export default App;