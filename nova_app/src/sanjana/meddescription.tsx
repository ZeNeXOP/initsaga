import React from 'react';
import TextContainer from './meddesc';
import MedDesc from './meddesc';


const MedDescription = () => {
    return (
        <div style={{ padding: '20px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                
                {/* Title */}
                <h1 style={{ fontSize: '52px', color: '#f9f9f9' }}>
                    Medicine Description
                </h1>

                {/* Search Bar */}
                <input
                    type="text"
                    placeholder="Search..."
                    style={{
                        padding: '10px',
                        fontSize: '16px',
                        borderRadius: '5px',
                        border: '1px solid #ccc',
                        width: '250px', // Adjust width as needed
                    }}
                />
            </div>

            {/* Rest of the content */}
            <MedDesc />
        </div>
    );
}

export default MedDescription;

