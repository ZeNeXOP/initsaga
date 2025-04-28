import React, { useState } from "react";
import { FiEdit } from "react-icons/fi"; 

const PersonalData: React.FC = () => {
  const [personalData] = useState({
    name: "John Doe",
    age: 29,
    weight: "75 kg",
    height: "5'9\"",
    sex: "Male",
    bloodGroup: "O+",
    historyOfDiseases: "None",
    emergencyContacts: [
      { name: "Jane Doe", relationship: "Wife", phone: "+1234567890" },
      { name: "Mark Doe", relationship: "Father", phone: "+0987654321" },
    ],
    additionalData: "No additional data",
  });

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
    section: {
      marginBottom: "24px",
      padding: "16px",
      backgroundColor: "#ffffff",
      borderRadius: "8px",
      boxShadow: "0 2px 6px rgba(0, 0, 0, 0.03)",
      transition: "transform 0.2s ease",
    },
    sectionTitle: {
      fontSize: "18px",
      fontWeight: "600",
      color: "#495057",
      marginBottom: "8px",
      borderBottom: "1px solid #f1f3f5",
      paddingBottom: "8px",
    },
    sectionContent: {
      fontSize: "16px",
      color: "#495057",
      lineHeight: "1.6",
    },
    contactList: {
      listStyle: "none",
      padding: 0,
      margin: 0,
    },
    contactItem: {
      padding: "8px 0",
      borderBottom: "1px solid #f8f9fa",
    },
    contactName: {
      fontWeight: "600",
      color: "#343a40",
    },
    contactRelation: {
      color: "#6c757d",
      fontStyle: "italic",
      marginLeft: "4px",
    },
    contactPhone: {
      color: "#495057",
      marginLeft: "8px",
    },
  };

  return (
    <div style={styles.container}>
      {/* Heading + Edit Icon */}
      <div style={styles.header}>
        <h1 style={styles.title}>Personal Details</h1>
        <button
          style={styles.editButton}
          title="Edit Personal Data"
          onClick={() => {
            console.log("Edit button clicked (functionality coming soon)");
          }}
        >
          <FiEdit size={20} color="#4263eb" />
        </button>
      </div>

      {/* Personal Information */}
      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Name</h2>
        <p style={styles.sectionContent}>{personalData.name}</p>
      </div>

      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Age</h2>
        <p style={styles.sectionContent}>{personalData.age} years</p>
      </div>

      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Weight</h2>
        <p style={styles.sectionContent}>{personalData.weight}</p>
      </div>

      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Height</h2>
        <p style={styles.sectionContent}>{personalData.height}</p>
      </div>

      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Sex</h2>
        <p style={styles.sectionContent}>{personalData.sex}</p>
      </div>

      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Blood Group</h2>
        <p style={styles.sectionContent}>{personalData.bloodGroup}</p>
      </div>

      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>History of Diseases</h2>
        <p style={styles.sectionContent}>{personalData.historyOfDiseases}</p>
      </div>

      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Emergency Contacts</h2>
        <ul style={styles.contactList}>
          {personalData.emergencyContacts.map((contact, index) => (
            <li key={index} style={styles.contactItem}>
              <span style={styles.contactName}>{contact.name}</span>
              <span style={styles.contactRelation}>({contact.relationship})</span>
              <span style={styles.contactPhone}>{contact.phone}</span>
            </li>
          ))}
        </ul>
      </div>

      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Additional Personal Data</h2>
        <p style={styles.sectionContent}>{personalData.additionalData}</p>
      </div>
    </div>
  );
};

export default PersonalData;
