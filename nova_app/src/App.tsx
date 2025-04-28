import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Sidebar from './risi/sidebar'


function App() 
{
return(
  <div>
    <MedDescription/>
  </div>
)
}

export default App

/*
import React from 'react';
import MedDescription from './sanjana/meddescription';
import MedicineInfo from './sanjana/detailcard/detailcard'; // 👈 Import the new component

const App = () => {
  return (
    <div>
      {//Your Existing Layout//}
      <MedDescription />

      {// New MedicineInfo box //}
      <div style={{ marginTop: '40px' }}>
        <MedicineInfo
          name="Paracetamol 500mg"
          timeOfDay="Morning and Night"
          mealTiming="After Meals"
          dosage="1 tablet"
          startDate="2025-05-01"
          endDate="2025-05-07"
        />
      </div>
    </div>
  );
}

export default App; 

*/