import React from 'react';

const MedDesc: React.FC = () => {
  return (
    <div style={{
      padding: '20px',
      maxWidth: '1400px',
      margin: '0 auto',
      color: '#02066F',
    }}>
      
      {/* Content two columns */}
      <div style={{
        display: 'flex',
        gap: '30px',
      }}>
        
        {/* Left Column (Big Box) */}
        <div style={{
          flex: '1',
          border: '1px solid #ccc',
          borderRadius: '10px',
          padding: '30px',
          backgroundColor: '#f9f9f9',
          minHeight: '600px',
          display: 'flex',
          flexDirection: 'column',
          gap: '30px',
        }}>
          <div>
            <h2>Medicine Description</h2>
            <p>(Enter the description of the medicine here)</p>
          </div>
          <div>
            <h2>Used For</h2>
            <p>(Enter the uses of the medicine here)</p>
          </div>
        </div>

        {/* Right Column (Three stacked Boxes) */}
        <div style={{
          flex: '1',
          display: 'flex',
          flexDirection: 'column',
          gap: '30px',
        }}>
          {/* Lifetime */}
          <div style={{
            border: '1px solid #ccc',
            borderRadius: '10px',
            padding: '20px',
            backgroundColor: '#f9f9f9',
          }}>
            <h2>Lifetime</h2>
            <p>(Enter the lifetime details here)</p>
          </div>

          {/* Other Details */}
          <div style={{
            flexGrow: 1,
            border: '1px solid #ccc',
            borderRadius: '10px',
            padding: '20px',
            backgroundColor: '#f9f9f9',
          }}>
            <h2>Other Details</h2>
            <p>(Enter other details of the medicine here, like price, creation date, place, manufacturer, etc.)</p>
          </div>

          {/* Ingredients */}
          <div style={{
            border: '1px solid #ccc',
            borderRadius: '10px',
            padding: '20px',
            backgroundColor: '#f9f9f9',
          }}>
            <h2>Ingredients</h2>
            <p>(Enter the ingredients used in the medicine here)</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default MedDesc;
