import React, { useState } from "react";

const AppointmentDetails: React.FC = () => {
  const [appointmentData, setAppointmentData] = useState({
    doctorName: "Dr. John Smith",
    consultationPlace: "City Hospital, Room 101",
    appointmentReason: "Routine Check-up",
    consultationStatus: "Completed", // Options: "Completed", "Scheduled", "Cancelled"
    paymentStatus: "Paid", // Options: "Paid", "Pending"
    additionalData: "Patient has reported mild chest pain in the past week.",
    appointmentDate: "October 15, 2023",
    appointmentTime: "10:30 AM",
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
      marginBottom: "24px",
      borderBottom: "1px solid #e9ecef",
      paddingBottom: "16px",
    },
    title: {
      fontSize: "28px",
      fontWeight: "700",
      color: "#343a40",
      margin: "0 0 8px 0",
    },
    dateTime: {
      fontSize: "16px",
      color: "#6c757d",
      display: "flex",
      alignItems: "center",
      gap: "16px",
    },
    infoCard: {
      backgroundColor: "#ffffff",
      borderRadius: "8px",
      padding: "24px",
      marginBottom: "20px",
      boxShadow: "0 2px 6px rgba(0, 0, 0, 0.04)",
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
      gap: "24px",
    },
    section: {
      marginBottom: "20px",
    },
    sectionTitle: {
      fontSize: "16px",
      fontWeight: "600",
      color: "#6c757d",
      marginBottom: "8px",
    },
    sectionContent: {
      fontSize: "18px",
      color: "#343a40",
      fontWeight: "500",
    },
    statusSection: {
      display: "flex",
      justifyContent: "space-between",
      backgroundColor: "#ffffff",
      borderRadius: "8px",
      padding: "16px 24px",
      marginBottom: "20px",
      boxShadow: "0 2px 6px rgba(0, 0, 0, 0.04)",
    },
    statusItem: {
      textAlign: "center" as const,
    },
    statusLabel: {
      fontSize: "14px",
      color: "#6c757d",
      marginBottom: "8px",
    },
    statusBadge: {
      display: "inline-block",
      padding: "6px 12px",
      borderRadius: "16px",
      fontWeight: "600",
      fontSize: "14px",
    },
    completedBadge: {
      backgroundColor: "#d3f9d8",
      color: "#2b8a3e",
    },
    scheduledBadge: {
      backgroundColor: "#e7f5ff",
      color: "#1971c2",
    },
    cancelledBadge: {
      backgroundColor: "#ffe3e3",
      color: "#c92a2a",
    },
    paidBadge: {
      backgroundColor: "#d3f9d8",
      color: "#2b8a3e",
    },
    pendingBadge: {
      backgroundColor: "#fff3bf",
      color: "#e67700",
    },
    additionalSection: {
      backgroundColor: "#ffffff",
      borderRadius: "8px",
      padding: "24px",
      marginBottom: "20px",
      boxShadow: "0 2px 6px rgba(0, 0, 0, 0.04)",
    },
    additionalTitle: {
      fontSize: "18px",
      fontWeight: "600",
      color: "#343a40",
      marginBottom: "12px",
    },
    additionalContent: {
      fontSize: "16px",
      color: "#495057",
      lineHeight: "1.6",
      padding: "16px",
      backgroundColor: "#f8f9fa",
      borderRadius: "6px",
      border: "1px solid #e9ecef",
    },
  };

  const getConsultationStatusStyle = (status: string) => {
    switch (status) {
      case "Completed":
        return { ...styles.statusBadge, ...styles.completedBadge };
      case "Scheduled":
        return { ...styles.statusBadge, ...styles.scheduledBadge };
      case "Cancelled":
        return { ...styles.statusBadge, ...styles.cancelledBadge };
      default:
        return styles.statusBadge;
    }
  };

  const getPaymentStatusStyle = (status: string) => {
    switch (status) {
      case "Paid":
        return { ...styles.statusBadge, ...styles.paidBadge };
      case "Pending":
        return { ...styles.statusBadge, ...styles.pendingBadge };
      default:
        return styles.statusBadge;
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>Appointment Details</h1>
        <div style={styles.dateTime}>
          <span>{appointmentData.appointmentDate}</span>
          <span>|</span>
          <span>{appointmentData.appointmentTime}</span>
        </div>
      </div>

      <div style={styles.infoCard}>
        <div style={styles.section}>
          <h3 style={styles.sectionTitle}>Doctor Name</h3>
          <p style={styles.sectionContent}>{appointmentData.doctorName}</p>
        </div>

        <div style={styles.section}>
          <h3 style={styles.sectionTitle}>Place of Consultation</h3>
          <p style={styles.sectionContent}>{appointmentData.consultationPlace}</p>
        </div>
      </div>

      <div style={styles.infoCard}>
        <div style={styles.section}>
          <h3 style={styles.sectionTitle}>Reason for Appointment</h3>
          <p style={styles.sectionContent}>{appointmentData.appointmentReason}</p>
        </div>
      </div>

      <div style={styles.statusSection}>
        <div style={styles.statusItem}>
          <div style={styles.statusLabel}>Consultation Status</div>
          <div style={getConsultationStatusStyle(appointmentData.consultationStatus)}>
            {appointmentData.consultationStatus}
          </div>
        </div>

        <div style={styles.statusItem}>
          <div style={styles.statusLabel}>Payment Status</div>
          <div style={getPaymentStatusStyle(appointmentData.paymentStatus)}>
            {appointmentData.paymentStatus}
          </div>
        </div>
      </div>

      <div style={styles.additionalSection}>
        <h3 style={styles.additionalTitle}>Additional Notes</h3>
        <div style={styles.additionalContent}>
          {appointmentData.additionalData}
        </div>
      </div>
    </div>
  );
};

export default AppointmentDetails;
