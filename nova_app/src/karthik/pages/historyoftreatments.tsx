import React from "react";
import { FaCalendarAlt, FaStethoscope, FaClipboardList, FaNotesMedical, FaClock } from "react-icons/fa";

const HistoryOfTreatments: React.FC = () => {
  const pastTreatments = [
    {
      doctorName: "Dr. Emily Johnson",
      doctorSpecialty: "Orthopedic Surgeon",
      doctorPhoto: "https://via.placeholder.com/80", // Placeholder photo
      diagnosis: "Fractured Arm",
      treatmentSummary: "Arm cast applied for 6 weeks. Regular checkups done.",
      startDate: "2024-11-10",
      endDate: "2025-01-05",
      notes: "Complete recovery. Physiotherapy recommended for 2 months.",
    },
    {
      doctorName: "Dr. Michael Brown",
      doctorSpecialty: "Allergist",
      doctorPhoto: "https://via.placeholder.com/80",
      diagnosis: "Seasonal Allergies",
      treatmentSummary: "Antihistamines prescribed. Symptoms managed successfully.",
      startDate: "2024-04-01",
      endDate: "2024-04-20",
      notes: "Patient advised on preventive measures for future seasons.",
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
    timeline: {
      position: "relative" as const,
      paddingLeft: "32px",
    },
    timelineBar: {
      position: "absolute" as const,
      left: "0",
      top: "0",
      bottom: "0",
      width: "3px",
      backgroundColor: "#e9ecef",
    },
    treatmentCard: {
      backgroundColor: "#ffffff",
      borderRadius: "12px",
      overflow: "hidden",
      marginBottom: "32px",
      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
      position: "relative" as const,
    },
    timelineDot: {
      position: "absolute" as const,
      left: "-43px",
      top: "24px",
      width: "18px",
      height: "18px",
      borderRadius: "50%",
      backgroundColor: "#4263eb",
      border: "4px solid #e7f5ff",
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
    treatmentDates: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "12px 16px",
      backgroundColor: "#e7f5ff",
      borderRadius: "8px",
      marginBottom: "24px",
    },
    dateContainer: {
      display: "flex",
      alignItems: "center",
      gap: "10px",
    },
    dateLabel: {
      fontSize: "14px",
      color: "#4a5568",
    },
    dateValue: {
      fontSize: "16px",
      fontWeight: "600",
      color: "#2b6cb0",
    },
    dateSeparator: {
      fontSize: "18px",
      color: "#718096",
    },
    iconContainer: {
      width: "32px",
      height: "32px",
      borderRadius: "50%",
      backgroundColor: "#e7f5ff",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    noTreatments: {
      textAlign: "center" as const,
      padding: "40px 20px",
      color: "#718096",
    },
    noTreatmentsTitle: {
      fontSize: "24px",
      fontWeight: "600",
      color: "#343a40",
      marginBottom: "16px",
    },
    noTreatmentsText: {
      fontSize: "16px",
      color: "#718096",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>History of Treatments</h1>
        <p style={styles.subtitle}>Your past medical treatments and procedures</p>
      </div>

      {pastTreatments.length > 0 ? (
        <div style={styles.timeline}>
          <div style={styles.timelineBar}></div>
          
          {pastTreatments.map((treatment, index) => (
            <div key={index} style={styles.treatmentCard}>
              <div style={styles.timelineDot}></div>
              
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
                <div style={styles.treatmentDates}>
                  <div style={styles.dateContainer}>
                    <FaCalendarAlt color="#4263eb" />
                    <div>
                      <div style={styles.dateLabel}>Started</div>
                      <div style={styles.dateValue}>{treatment.startDate}</div>
                    </div>
                  </div>
                  
                  <div style={styles.dateSeparator}>→</div>
                  
                  <div style={styles.dateContainer}>
                    <FaCalendarAlt color="#4263eb" />
                    <div>
                      <div style={styles.dateLabel}>Completed</div>
                      <div style={styles.dateValue}>{treatment.endDate}</div>
                    </div>
                  </div>
                </div>
                
                <h3 style={styles.sectionTitle}>
                  <div style={styles.iconContainer}>
                    <FaStethoscope color="#4263eb" />
                  </div>
                  Diagnosis
                </h3>
                <div style={styles.sectionContent}>{treatment.diagnosis}</div>

                <h3 style={styles.sectionTitle}>
                  <div style={styles.iconContainer}>
                    <FaClipboardList color="#4263eb" />
                  </div>
                  Treatment Summary
                </h3>
                <div style={styles.sectionContent}>{treatment.treatmentSummary}</div>

                <h3 style={styles.sectionTitle}>
                  <div style={styles.iconContainer}>
                    <FaNotesMedical color="#4263eb" />
                  </div>
                  Additional Notes
                </h3>
                <div style={styles.sectionContent}>{treatment.notes}</div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div style={styles.noTreatments}>
          <h2 style={styles.noTreatmentsTitle}>No Past Treatments Found</h2>
          <p style={styles.noTreatmentsText}>Looks like you haven't had any treatments recorded yet.</p>
        </div>
      )}
    </div>
  );
};

export default HistoryOfTreatments;