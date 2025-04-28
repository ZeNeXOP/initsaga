import React, { useState } from "react";
import { FaUser, FaClipboardList, FaHistory, FaHeartbeat, FaStar, FaChevronRight } from "react-icons/fa";

const Sidebar: React.FC = () => {
  const [hoveredButton, setHoveredButton] = useState<string | null>(null);

  const buttons = [
    { label: "Personal Details", icon: <FaUser /> },
    { label: "Treatment Details", icon: <FaClipboardList /> },
    { label: "History of Treatments", icon: <FaHistory /> },
    { label: "Health Monitoring", icon: <FaHeartbeat /> },
    { label: "Favourites", icon: <FaStar /> },
  ];

  return (
    <div
      style={{
        width: "260px",
        height: "100vh",
        backgroundColor: "#f8f9fa",
        padding: "24px 16px",
        boxSizing: "border-box",
        boxShadow: "1px 0 10px rgba(0, 0, 0, 0.05)",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <h2 style={{ 
        textAlign: "center", 
        marginBottom: "24px", 
        fontSize: "24px",
        fontWeight: "700",
        color: "#343a40" 
      }}>
        Profile
      </h2>

      <div style={{ 
        display: "flex", 
        flexDirection: "column",
        alignItems: "center", 
        marginBottom: "32px" 
      }}>
        <div
          style={{
            width: "100px",
            height: "100px",
            borderRadius: "50%",
            backgroundColor: "#e9ecef",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            border: "4px solid #ffffff",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            marginBottom: "16px",
            overflow: "hidden"
          }}
        >
          <FaUser size={48} color="#6c757d" />
        </div>

        <h3 style={{ 
          fontSize: "18px", 
          fontWeight: "600", 
          color: "#495057", 
          margin: "0 0 4px 0" 
        }}>
          John Doe
        </h3>
        <p style={{ 
          margin: "0", 
          color: "#6c757d", 
          fontSize: "14px" 
        }}>
          Patient
        </p>
      </div>

      <div style={{ 
        display: "flex", 
        flexDirection: "column", 
        gap: "12px",
        marginTop: "8px"
      }}>
        {buttons.map((item) => (
          <button
            key={item.label}
            onMouseEnter={() => setHoveredButton(item.label)}
            onMouseLeave={() => setHoveredButton(null)}
            style={{
              padding: "12px 16px",
              fontSize: "16px",
              border: "none",
              borderRadius: "8px",
              backgroundColor: hoveredButton === item.label ? "#ffffff" : "transparent",
              color: hoveredButton === item.label ? "#4263eb" : "#495057",
              cursor: "pointer",
              transition: "all 0.2s ease",
              textAlign: "left",
              boxShadow: hoveredButton === item.label ? "0 4px 6px rgba(0, 0, 0, 0.05)" : "none",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <span style={{
              display: "flex", 
              alignItems: "center", 
              gap: "12px",
            }}>
              <span style={{
                color: hoveredButton === item.label ? "#4263eb" : "#6c757d",
              }}>
                {item.icon}
              </span>
              {item.label}
            </span>
            {hoveredButton === item.label && (
              <FaChevronRight size={12} color="#4263eb" />
            )}
          </button>
        ))}
      </div>

      <div style={{
        marginTop: "auto",
        textAlign: "center",
        padding: "20px 0 10px",
        color: "#6c757d",
        fontSize: "12px",
        borderTop: "1px solid #e9ecef",
      }}>
        <p style={{ margin: "0" }}>Nova Health App</p>
        <p style={{ margin: "4px 0 0 0" }}>v1.0.0</p>
      </div>
    </div>
  );
};

export default Sidebar;
