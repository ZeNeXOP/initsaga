import React from "react";
import { FiEdit } from "react-icons/fi";
import { FaUserMd, FaHospital, FaPills, FaStar } from "react-icons/fa";

const Favourites: React.FC = () => {
  const favourites = {
    doctors: [
      { name: "Dr. John Smith", specialty: "Cardiologist", photo: "https://via.placeholder.com/60" },
      { name: "Dr. Emily Brown", specialty: "Dermatologist", photo: "https://via.placeholder.com/60" },
    ],
    hospitals: [
      { name: "City Hospital", address: "123 Main St, Cityville" },
      { name: "Sunrise Clinic", address: "456 Oak Ave, Townsville" },
    ],
    medicines: [
      { name: "Aspirin", dosage: "100mg" },
      { name: "Metformin", dosage: "500mg" },
    ],
  };

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
      display: "flex",
      alignItems: "center",
      gap: "10px",
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
      marginBottom: "32px",
    },
    sectionHeader: {
      display: "flex",
      alignItems: "center",
      gap: "10px", 
      fontSize: "20px",
      fontWeight: "600",
      color: "#343a40",
      marginBottom: "16px",
      paddingBottom: "8px",
      borderBottom: "1px solid #f1f3f5",
    },
    sectionIcon: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "32px",
      height: "32px",
      borderRadius: "50%",
      backgroundColor: "#e7f5ff",
    },
    itemsContainer: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
      gap: "16px",
    },
    doctorCard: {
      backgroundColor: "#ffffff",
      borderRadius: "8px",
      padding: "16px",
      display: "flex",
      alignItems: "center",
      boxShadow: "0 2px 6px rgba(0, 0, 0, 0.04)",
      transition: "transform 0.2s ease",
      cursor: "pointer",
      "&:hover": {
        transform: "translateY(-3px)",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.08)",
      },
    },
    doctorPhoto: {
      width: "60px",
      height: "60px",
      borderRadius: "50%",
      objectFit: "cover" as const,
      marginRight: "16px",
      border: "2px solid #e7f5ff",
    },
    doctorInfo: {
      flex: 1,
    },
    doctorName: {
      fontSize: "16px",
      fontWeight: "600",
      color: "#343a40",
      marginBottom: "4px",
    },
    doctorSpecialty: {
      fontSize: "14px",
      color: "#6c757d",
    },
    itemCard: {
      backgroundColor: "#ffffff",
      borderRadius: "8px",
      padding: "16px",
      display: "flex",
      alignItems: "center",
      boxShadow: "0 2px 6px rgba(0, 0, 0, 0.04)",
      transition: "transform 0.2s ease",
      cursor: "pointer",
      "&:hover": {
        transform: "translateY(-3px)",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.08)",
      },
    },
    itemIcon: {
      width: "40px",
      height: "40px",
      borderRadius: "50%",
      backgroundColor: "#e7f5ff",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginRight: "16px",
    },
    itemInfo: {
      flex: 1,
    },
    itemName: {
      fontSize: "16px",
      fontWeight: "600",
      color: "#343a40",
      marginBottom: "4px",
    },
    itemDetails: {
      fontSize: "14px",
      color: "#6c757d",
    },
    emptyState: {
      textAlign: "center" as const,
      padding: "24px",
      backgroundColor: "#ffffff",
      borderRadius: "8px",
      color: "#6c757d",
      fontStyle: "italic",
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>
          <FaStar color="#fcc419" size={24} />
          Your Favourites
        </h1>
        <button style={styles.editButton}>
          <FiEdit size={20} color="#4263eb" />
        </button>
      </div>

      {/* Doctors Section */}
      <div style={styles.section}>
        <h2 style={styles.sectionHeader}>
          <div style={styles.sectionIcon}>
            <FaUserMd color="#4263eb" size={16} />
          </div>
          Favourite Doctors
        </h2>
        
        {favourites.doctors.length === 0 ? (
          <div style={styles.emptyState}>No favourite doctors added yet.</div>
        ) : (
          <div style={styles.itemsContainer}>
            {favourites.doctors.map((doctor, index) => (
              <div key={index} style={styles.doctorCard}>
                <img 
                  src={doctor.photo} 
                  alt={doctor.name} 
                  style={styles.doctorPhoto} 
                />
                <div style={styles.doctorInfo}>
                  <div style={styles.doctorName}>{doctor.name}</div>
                  <div style={styles.doctorSpecialty}>{doctor.specialty}</div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Hospitals Section */}
      <div style={styles.section}>
        <h2 style={styles.sectionHeader}>
          <div style={styles.sectionIcon}>
            <FaHospital color="#4263eb" size={16} />
          </div>
          Favourite Hospitals
        </h2>
        
        {favourites.hospitals.length === 0 ? (
          <div style={styles.emptyState}>No favourite hospitals added yet.</div>
        ) : (
          <div style={styles.itemsContainer}>
            {favourites.hospitals.map((hospital, index) => (
              <div key={index} style={styles.itemCard}>
                <div style={styles.itemIcon}>
                  <FaHospital color="#4263eb" size={20} />
                </div>
                <div style={styles.itemInfo}>
                  <div style={styles.itemName}>{hospital.name}</div>
                  <div style={styles.itemDetails}>{hospital.address}</div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Medicines Section */}
      <div style={styles.section}>
        <h2 style={styles.sectionHeader}>
          <div style={styles.sectionIcon}>
            <FaPills color="#4263eb" size={16} />
          </div>
          Favourite Medicines
        </h2>
        
        {favourites.medicines.length === 0 ? (
          <div style={styles.emptyState}>No favourite medicines added yet.</div>
        ) : (
          <div style={styles.itemsContainer}>
            {favourites.medicines.map((medicine, index) => (
              <div key={index} style={styles.itemCard}>
                <div style={styles.itemIcon}>
                  <FaPills color="#4263eb" size={20} />
                </div>
                <div style={styles.itemInfo}>
                  <div style={styles.itemName}>{medicine.name}</div>
                  <div style={styles.itemDetails}>Dosage: {medicine.dosage}</div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Favourites;
