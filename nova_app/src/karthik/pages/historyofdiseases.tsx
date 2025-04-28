import React, { useState } from "react";
import { FiEdit } from "react-icons/fi"; // FontAwesome Edit icon

const HistoryOfDiseases: React.FC = () => {
  const [diseases, setDiseases] = useState([
    {
      diseaseName: "Hypertension",
      status: "Treated",
      treatedBy: "Dr. John Smith (Cardiologist)",
      treatingBy: "",
    },
    {
      diseaseName: "Asthma",
      status: "Active",
      treatingBy: "Dr. Sarah Lee (Pulmonologist)",
      treatedBy: "",
    },
    {
      diseaseName: "Diabetes",
      status: "Treated",
      treatedBy: "Dr. Emily Brown (Endocrinologist)",
      treatingBy: "",
    },
  ]);

  // Styles
  const styles = {
    container: {
      padding: "32px",
      maxWidth: "800px",
      margin: "0 auto",
      backgroundColor: "#f8f9fa",
      borderRadius: "12px",
      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
    },
    header: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: "24px",
      borderBottom: "1px solid #e9ecef",
      paddingBottom: "16px",
    },
    title: {
      fontSize: "28px",
      fontWeight: "700",
      color: "#343a40",
      margin: 0,
    },
    editButton: {
      background: "#f1f3f5",
      border: "none",
      borderRadius: "50%",
      cursor: "pointer",
      width: "42px",
      height: "42px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      transition: "all 0.2s ease",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    },
    diseaseCard: {
      backgroundColor: "#ffffff",
      borderRadius: "8px",
      padding: "20px",
      marginBottom: "20px",
      boxShadow: "0 2px 6px rgba(0, 0, 0, 0.04)",
      transition: "transform 0.2s ease, box-shadow 0.2s ease",
      border: "1px solid #e9ecef",
    },
    diseaseName: {
      fontSize: "20px",
      fontWeight: "600",
      color: "#343a40",
      marginBottom: "12px",
      borderBottom: "1px solid #f1f3f5",
      paddingBottom: "8px",
    },
    statusContainer: {
      display: "flex", 
      alignItems: "center",
      marginBottom: "8px",
    },
    statusLabel: {
      fontWeight: "600",
      marginRight: "8px",
      color: "#495057",
    },
    statusValue: {
      display: "inline-block",
      padding: "4px 10px",
      borderRadius: "16px",
      fontSize: "14px",
      fontWeight: "500",
    },
    treatedStatus: {
      backgroundColor: "#d3f9d8",
      color: "#2b8a3e",
    },
    activeStatus: {
      backgroundColor: "#fff3bf",
      color: "#e67700",
    },
    doctorInfo: {
      display: "flex",
      alignItems: "center",
      marginTop: "12px",
    },
    doctorLabel: {
      fontWeight: "600",
      marginRight: "8px",
      color: "#495057",
    },
    doctorValue: {
      color: "#495057",
      fontSize: "15px",
    },
    noDiseasesMessage: {
      textAlign: "center" as const,
      padding: "30px 0",
      color: "#6c757d",
      fontSize: "18px",
      fontStyle: "italic",
    }
  };

  const handleEditClick = () => {
    // Placeholder for navigation to EditHistoryOfDiseases
    console.log("Navigate to EditHistoryOfDiseases");
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>History of Diseases</h1>
        <button style={styles.editButton} onClick={handleEditClick}>
          <FiEdit size={20} color="#4263eb" />
        </button>
      </div>

      {diseases.length === 0 ? (
        <div style={styles.noDiseasesMessage}>No disease history available.</div>
      ) : (
        <div>
          {diseases.map((disease, index) => (
            <div key={index} style={styles.diseaseCard}>
              <h2 style={styles.diseaseName}>{disease.diseaseName}</h2>
              
              <div style={styles.statusContainer}>
                <span style={styles.statusLabel}>Status:</span>
                <span style={{
                  ...styles.statusValue,
                  ...(disease.status === "Treated" ? styles.treatedStatus : styles.activeStatus)
                }}>
                  {disease.status}
                </span>
              </div>
              
              {disease.status === "Treated" ? (
                <div style={styles.doctorInfo}>
                  <span style={styles.doctorLabel}>Treated By:</span>
                  <span style={styles.doctorValue}>{disease.treatedBy}</span>
                </div>
              ) : (
                <div style={styles.doctorInfo}>
                  <span style={styles.doctorLabel}>Treating By:</span>
                  <span style={styles.doctorValue}>{disease.treatingBy}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default HistoryOfDiseases;
