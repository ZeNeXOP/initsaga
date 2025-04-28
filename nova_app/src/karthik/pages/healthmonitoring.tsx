import React from "react";

const HealthMonitoring: React.FC = () => {
  const healthData = {
    stepsWalked: 7500,
    bloodPressure: "120/80 mmHg",
    oxygenLevel: "98%",
    heartRate: "72 bpm",
    caloriesBurned: 450,
    sleepHours: 7.5,
    temperature: "36.8°C",
  };

  // Styles
  const styles = {
    container: {
      padding: "32px",
      maxWidth: "1200px",
      margin: "0 auto",
      backgroundColor: "#f0f7ff",
      borderRadius: "12px",
      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
    },
    header: {
      marginBottom: "32px",
      textAlign: "center" as const,
    },
    title: {
      fontSize: "32px",
      fontWeight: "700",
      color: "#2b6cb0",
      margin: 0,
      marginBottom: "8px",
    },
    subtitle: {
      fontSize: "16px",
      color: "#4a5568",
      marginTop: "0",
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
      gap: "24px",
    },
    card: {
      backgroundColor: "#ffffff",
      borderRadius: "12px",
      padding: "24px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.05)",
      textAlign: "center" as const,
      transition: "transform 0.3s ease, box-shadow 0.3s ease",
      cursor: "pointer",
      ":hover": {
        transform: "translateY(-5px)",
        boxShadow: "0 8px 16px rgba(0, 0, 0, 0.1)",
      },
    },
    cardTitle: {
      fontSize: "18px",
      fontWeight: "600",
      color: "#4a5568",
      marginBottom: "16px",
    },
    cardValue: {
      fontSize: "32px",
      fontWeight: "700",
      marginBottom: "8px",
    },
    cardDescription: {
      fontSize: "14px",
      color: "#718096",
    },
    steps: {
      color: "#2c7a7b", // teal
    },
    bloodPressure: {
      color: "#c53030", // red
    },
    oxygenLevel: {
      color: "#2b6cb0", // blue
    },
    heartRate: {
      color: "#e53e3e", // red
    },
    calories: {
      color: "#805ad5", // purple
    },
    sleep: {
      color: "#2c5282", // blue
    },
    temperature: {
      color: "#dd6b20", // orange
    },
    iconContainer: {
      backgroundColor: "#ebf8ff",
      borderRadius: "50%",
      width: "64px",
      height: "64px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      margin: "0 auto 16px auto",
    },
  };

  const getCardStyle = (type: string) => {
    return {
      ...styles.card,
      borderTop: `4px solid ${getColorByType(type)}`,
    };
  };

  const getColorByType = (type: string) => {
    switch (type) {
      case "steps":
        return "#2c7a7b"; // teal
      case "bloodPressure":
        return "#c53030"; // red
      case "oxygenLevel":
        return "#2b6cb0"; // blue
      case "heartRate":
        return "#e53e3e"; // red
      case "calories":
        return "#805ad5"; // purple
      case "sleep":
        return "#2c5282"; // blue
      case "temperature":
        return "#dd6b20"; // orange
      default:
        return "#4a5568"; // gray
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>Health Monitoring Dashboard</h1>
        <p style={styles.subtitle}>Real-time health metrics from your connected devices</p>
      </div>

      <div style={styles.grid}>
        <div style={getCardStyle("steps")}>
          <h2 style={styles.cardTitle}>Steps Walked</h2>
          <p style={{...styles.cardValue, ...styles.steps}}>{healthData.stepsWalked}</p>
          <p style={styles.cardDescription}>Daily goal: 10,000 steps</p>
        </div>

        <div style={getCardStyle("bloodPressure")}>
          <h2 style={styles.cardTitle}>Blood Pressure</h2>
          <p style={{...styles.cardValue, ...styles.bloodPressure}}>{healthData.bloodPressure}</p>
          <p style={styles.cardDescription}>Last measured: 2 hours ago</p>
        </div>

        <div style={getCardStyle("oxygenLevel")}>
          <h2 style={styles.cardTitle}>Oxygen Level (SpO₂)</h2>
          <p style={{...styles.cardValue, ...styles.oxygenLevel}}>{healthData.oxygenLevel}</p>
          <p style={styles.cardDescription}>Healthy range: 95-100%</p>
        </div>

        <div style={getCardStyle("heartRate")}>
          <h2 style={styles.cardTitle}>Heart Rate</h2>
          <p style={{...styles.cardValue, ...styles.heartRate}}>{healthData.heartRate}</p>
          <p style={styles.cardDescription}>Resting heart rate</p>
        </div>

        <div style={getCardStyle("calories")}>
          <h2 style={styles.cardTitle}>Calories Burned</h2>
          <p style={{...styles.cardValue, ...styles.calories}}>{healthData.caloriesBurned} kcal</p>
          <p style={styles.cardDescription}>Daily target: 600 kcal</p>
        </div>

        <div style={getCardStyle("sleep")}>
          <h2 style={styles.cardTitle}>Sleep Hours</h2>
          <p style={{...styles.cardValue, ...styles.sleep}}>{healthData.sleepHours} hrs</p>
          <p style={styles.cardDescription}>Recommended: 7-9 hours</p>
        </div>

        <div style={getCardStyle("temperature")}>
          <h2 style={styles.cardTitle}>Body Temperature</h2>
          <p style={{...styles.cardValue, ...styles.temperature}}>{healthData.temperature}</p>
          <p style={styles.cardDescription}>Normal range: 36.1-37.2°C</p>
        </div>
      </div>
    </div>
  );
};

export default HealthMonitoring;
