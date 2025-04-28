import React from "react";
import { useNavigate } from "react-router-dom";
import { FaUserEdit, FaListAlt, FaPrescriptionBottleAlt, FaCalendarAlt, FaNotesMedical, FaMedkit, FaChartLine, FaSignOutAlt } from "react-icons/fa";

const Dashboard: React.FC = () => {
  const navigate = useNavigate();

  // CSS-in-JS styling
  const styles = {
    container: {
      display: "flex",
      flexDirection: "column" as const,
      minHeight: "100vh",
      padding: "32px",
      backgroundColor: "#f8f9fa",
    },
    header: {
      marginBottom: "32px",
      textAlign: "center" as const,
    },
    title: {
      fontSize: "28px",
      fontWeight: "700",
      color: "#343a40",
      marginBottom: "8px",
    },
    subtitle: {
      fontSize: "16px",
      color: "#6c757d",
    },
    cardsContainer: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
      gap: "24px",
      marginBottom: "32px",
    },
    card: {
      backgroundColor: "white",
      borderRadius: "12px",
      padding: "24px",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.05)",
      transition: "transform 0.2s ease, box-shadow 0.2s ease",
      cursor: "pointer",
      display: "flex",
      flexDirection: "column" as const,
      alignItems: "center",
      textAlign: "center" as const,
      "&:hover": {
        transform: "translateY(-5px)",
        boxShadow: "0 10px 15px rgba(0, 0, 0, 0.1)",
      },
    },
    iconContainer: {
      width: "60px",
      height: "60px",
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: "16px",
    },
    cardTitle: {
      fontSize: "18px",
      fontWeight: "600",
      color: "#343a40",
      marginBottom: "8px",
    },
    cardDescription: {
      fontSize: "14px",
      color: "#6c757d",
      lineHeight: 1.5,
    },
    logoutButton: {
      marginTop: "auto",
      alignSelf: "center",
      padding: "12px 24px",
      backgroundColor: "#e9ecef",
      color: "#495057",
      border: "none",
      borderRadius: "8px",
      display: "flex",
      alignItems: "center",
      gap: "8px",
      cursor: "pointer",
      fontWeight: "600",
      transition: "background-color 0.2s ease",
      "&:hover": {
        backgroundColor: "#dee2e6",
      },
    },
  };

  // Function to navigate to different routes
  const handleNavigation = (path: string) => {
    navigate(path);
  };

  // Card data with icons and background colors
  const cards = [
    {
      title: "Personal Data",
      description: "View and edit your personal information and emergency contacts",
      path: "/personaldata",
      icon: <FaUserEdit size={24} color="#fff" />,
      bgColor: "#4263eb",
    },
    {
      title: "Medical History",
      description: "Access your complete medical history and past records",
      path: "/history",
      icon: <FaListAlt size={24} color="#fff" />,
      bgColor: "#f03e3e",
    },
    {
      title: "Medication",
      description: "Track and manage your current medications and schedules",
      path: "/medication",
      icon: <FaPrescriptionBottleAlt size={24} color="#fff" />,
      bgColor: "#37b24d",
    },
    {
      title: "Appointments",
      description: "Schedule and view upcoming doctor appointments",
      path: "/appointments",
      icon: <FaCalendarAlt size={24} color="#fff" />,
      bgColor: "#f76707",
    },
    {
      title: "Prescriptions",
      description: "View your current and past prescriptions",
      path: "/prescriptions",
      icon: <FaNotesMedical size={24} color="#fff" />,
      bgColor: "#ae3ec9",
    },
    {
      title: "Health Metrics",
      description: "Track vital signs and health measurements over time",
      path: "/metrics",
      icon: <FaChartLine size={24} color="#fff" />,
      bgColor: "#1c7ed6",
    },
    {
      title: "Emergency Info",
      description: "Quick access to critical medical information in case of emergency",
      path: "/emergency",
      icon: <FaMedkit size={24} color="#fff" />,
      bgColor: "#e03131",
    },
  ];

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.title}>Health Dashboard</h1>
        <p style={styles.subtitle}>Manage your health information and records in one place</p>
      </header>

      <div style={styles.cardsContainer}>
        {cards.map((card, index) => (
          <div
            key={index}
            style={styles.card}
            onClick={() => handleNavigation(card.path)}
          >
            <div 
              style={{
                ...styles.iconContainer,
                backgroundColor: card.bgColor,
              }}
            >
              {card.icon}
            </div>
            <h3 style={styles.cardTitle}>{card.title}</h3>
            <p style={styles.cardDescription}>{card.description}</p>
          </div>
        ))}
      </div>

      <button 
        style={styles.logoutButton}
        onClick={() => handleNavigation("/login")}
      >
        <FaSignOutAlt size={16} />
        Logout
      </button>
    </div>
  );
};

export default Dashboard; 