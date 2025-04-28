import React from "react";
import { FaCalendarAlt, FaClock, FaPills, FaUtensils } from "react-icons/fa";

const TreatmentDetails: React.FC = () => {
  const treatments = [
    {
      doctorName: "Dr. Alice Smith",
      doctorSpecialty: "Cardiologist",
      doctorPhoto: "https://via.placeholder.com/80", // Placeholder photo
      prescription: "Take 1 tablet of Paracetamol twice a day after meals.",
      appointments: [
        { date: "2025-05-05", time: "10:00 AM" },
        { date: "2025-05-12", time: "2:00 PM" },
      ],
      dietPlan: "Low-sodium diet, drink at least 2L water daily, avoid processed foods.",
    },
    {
      doctorName: "Dr. John Doe",
      doctorSpecialty: "Dermatologist",
      doctorPhoto: "https://via.placeholder.com/80", // Another placeholder photo
      prescription: "Apply topical cream on affected area twice daily.",
      appointments: [
        { date: "2025-05-07", time: "9:00 AM" },
      ],
      dietPlan: "Increase Vitamin D intake, daily sunlight exposure 20 mins.",
    },
  ];

  // Styles
  const styles = {
    container: {
      padding: "32px",
      maxWidth: "900px",
      margin: "0 auto",
      backgroundColor: "#f8f9fa",
      borderRadius: "12px",
      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
    },
    header: {
      marginBottom: "32px",
      textAlign: "center" as const,
      borderBottom: "1px solid #e9ecef",
      paddingBottom: "16px",
    },
    title: {
      fontSize: "32px",
      fontWeight: "700",
      color: "#343a40",
      margin: 0,
    },
    subtitle: {
      fontSize: "16px",
      color: "#6c757d",
      marginTop: "8px",
    },
    treatmentCard: {
      backgroundColor: "#ffffff",
      borderRadius: "12px",
      overflow: "hidden",
      marginBottom: "24px",
      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
    },
    doctorHeader: {
      display: "flex",
      alignItems: "center",
      padding: "20px",
      borderBottom: "1px solid #f1f3f5",
      backgroundColor: "#f8f9fa",
    },
    doctorImage: {
      width: "80px",
      height: "80px",
      borderRadius: "50%",
      marginRight: "20px",
      objectFit: "cover" as const,
      border: "3px solid #e7f5ff",
    },
    doctorInfo: {
      flex: 1,
    },
    doctorName: {
      fontSize: "22px",
      fontWeight: "600",
      color: "#343a40",
      margin: "0 0 4px 0",
    },
    doctorSpecialty: {
      fontSize: "16px",
      color: "#6c757d",
    },
    contentSection: {
      padding: "24px",
    },
    sectionTitle: {
      fontSize: "18px",
      fontWeight: "600",
      color: "#343a40",
      marginBottom: "12px",
      display: "flex",
      alignItems: "center",
      gap: "8px",
    },
    sectionContent: {
      fontSize: "16px",
      color: "#495057",
      lineHeight: "1.6",
      padding: "16px",
      backgroundColor: "#f8f9fa",
      borderRadius: "8px",
      marginBottom: "24px",
    },
    appointmentsList: {
      listStyle: "none",
      padding: 0,
      margin: 0,
    },
    appointmentItem: {
      display: "flex",
      alignItems: "center",
      gap: "16px",
      padding: "12px 16px",
      borderBottom: "1px solid #f1f3f5",
      marginBottom: "8px",
      borderRadius: "8px",
      backgroundColor: "#f8f9fa",
    },
    dateTimeContainer: {
      flex: 1,
    },
    date: {
      fontSize: "16px",
      fontWeight: "600",
      color: "#343a40",
    },
    time: {
      fontSize: "14px",
      color: "#6c757d",
      marginTop: "4px",
    },
    iconContainer: {
      width: "40px",
      height: "40px",
      borderRadius: "50%",
      backgroundColor: "#e7f5ff",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>Treatment Details</h1>
        <p style={styles.subtitle}>Your current treatments and prescriptions</p>
      </div>

      {treatments.map((treatment, index) => (
        <div key={index} style={styles.treatmentCard}>
          <div style={styles.doctorHeader}>
            <img
              src={treatment.doctorPhoto}
              alt={treatment.doctorName}
              style={styles.doctorImage}
            />
            <div style={styles.doctorInfo}>
              <h2 style={styles.doctorName}>{treatment.doctorName}</h2>
              <p style={styles.doctorSpecialty}>{treatment.doctorSpecialty}</p>
            </div>
          </div>

          <div style={styles.contentSection}>
            <h3 style={styles.sectionTitle}>
              <div style={styles.iconContainer}>
                <FaPills color="#4263eb" />
              </div>
              Prescription
            </h3>
            <div style={styles.sectionContent}>{treatment.prescription}</div>

            <h3 style={styles.sectionTitle}>
              <div style={styles.iconContainer}>
                <FaCalendarAlt color="#4263eb" />
              </div>
              Scheduled Appointments
            </h3>
            <ul style={styles.appointmentsList}>
              {treatment.appointments.map((appointment, idx) => (
                <li key={idx} style={styles.appointmentItem}>
                  <div style={styles.iconContainer}>
                    <FaClock color="#4263eb" />
                  </div>
                  <div style={styles.dateTimeContainer}>
                    <div style={styles.date}>{appointment.date}</div>
                    <div style={styles.time}>{appointment.time}</div>
                  </div>
                </li>
              ))}
            </ul>

            <h3 style={styles.sectionTitle}>
              <div style={styles.iconContainer}>
                <FaUtensils color="#4263eb" />
              </div>
              Diet Plan
            </h3>
            <div style={styles.sectionContent}>{treatment.dietPlan}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TreatmentDetails;
