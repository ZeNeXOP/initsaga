import React from 'react';

interface MedicineInfoProps {
  name: string;
  timeOfDay: string;
  mealTiming: string;
  dosage: string;
  startDate: string;
  endDate: string;
}

const MedicineInfo: React.FC<MedicineInfoProps> = ({ 
  name, 
  timeOfDay, 
  mealTiming, 
  dosage, 
  startDate, 
  endDate 
}) => {
  return (
    <div style={{
      border: '1px solid #ccc',
      borderRadius: '10px',
      padding: '20px',
      backgroundColor: '#f9f9f9',
      maxWidth: '600px',
      margin: '20px auto',
      color: '#02066F',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
    }}>
      {/* Medicine Name Title */}
      <h2 style={{ fontSize: '28px', marginBottom: '20px', textAlign: 'center' }}>
        {name}
      </h2>

      {/* Medicine Details */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '18px' }}>
        <div><strong>Time of Day:</strong> {timeOfDay}</div>
        <div><strong>Meal Timing:</strong> {mealTiming}</div>
        <div><strong>Dosage:</strong> {dosage}</div>
        <div><strong>Start Date:</strong> {startDate}</div>
        <div><strong>End Date:</strong> {endDate}</div>
      </div>
    </div>
  );
}

export default MedicineInfo;
