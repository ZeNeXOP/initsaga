import React, { useState } from "react";
import { FaSave, FaTimes, FaUserMd, FaMapMarkerAlt, FaNotesMedical, FaClipboardCheck, FaMoneyBillWave } from "react-icons/fa";

const EditAppointmentDetails: React.FC = () => {
  const [appointmentData, setAppointmentData] = useState({
    doctorName: "Dr. John Smith",
    consultationPlace: "City Hospital, Room 101",
    appointmentReason: "Routine Check-up",
    consultationStatus: "Completed", // Options: "Completed", "Scheduled", "Cancelled"
    paymentStatus: "Paid", // Options: "Paid", "Pending"
    additionalData: "Patient has reported mild chest pain in the past week.",
    appointmentDate: "2023-10-15",
    appointmentTime: "10:30",
  });

  // Styles
  const styles = {
    container: {
      padding: "32px",
      maxWidth: "700px",
      margin: "0 auto",
      backgroundColor: "#f8f9fa",
      borderRadius: "12px",
      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
    },
    header: {
      marginBottom: "24px",
      borderBottom: "1px solid #e9ecef",
      paddingBottom: "16px",
      textAlign: "center" as const,
    },
    title: {
      fontSize: "28px",
      fontWeight: "700",
      color: "#343a40",
      margin: 0,
    },
    subtitle: {
      fontSize: "16px",
      color: "#6c757d",
      marginTop: "8px",
    },
    form: {
      display: "flex",
      flexDirection: "column" as const,
    },
    formRow: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "20px",
      marginBottom: "20px",
    },
    formGroup: {
      marginBottom: "24px",
    },
    label: {
      display: "block",
      marginBottom: "8px",
      fontSize: "16px",
      fontWeight: "600",
      color: "#495057",
    },
    inputWrapper: {
      position: "relative" as const,
    },
    icon: {
      position: "absolute" as const,
      left: "12px",
      top: "50%",
      transform: "translateY(-50%)",
      color: "#6c757d",
    },
    textareaIcon: {
      position: "absolute" as const,
      left: "12px",
      top: "12px",
      color: "#6c757d",
    },
    input: {
      width: "100%",
      padding: "12px 12px 12px 40px", 
      fontSize: "16px",
      borderRadius: "8px",
      border: "1px solid #ced4da",
      backgroundColor: "#fff",
      transition: "border-color 0.2s ease, box-shadow 0.2s ease",
      outline: "none",
      boxSizing: "border-box" as const,
    },
    select: {
      width: "100%",
      padding: "12px 12px 12px 40px",
      fontSize: "16px",
      borderRadius: "8px",
      border: "1px solid #ced4da",
      backgroundColor: "#fff",
      transition: "border-color 0.2s ease, box-shadow 0.2s ease",
      outline: "none",
      boxSizing: "border-box" as const,
      appearance: "none" as const,
      backgroundImage: "url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"12\" height=\"6\"><path d=\"M0 0h12L6 6z\" fill=\"%23343a40\"/></svg>')",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "right 12px center",
      backgroundSize: "12px 6px",
    },
    textarea: {
      width: "100%",
      padding: "12px 12px 12px 40px",
      fontSize: "16px",
      borderRadius: "8px",
      border: "1px solid #ced4da",
      backgroundColor: "#fff",
      minHeight: "120px",
      resize: "vertical" as const,
      transition: "border-color 0.2s ease, box-shadow 0.2s ease",
      outline: "none",
      boxSizing: "border-box" as const,
      fontFamily: "inherit",
    },
    buttonGroup: {
      display: "flex",
      justifyContent: "space-between",
      marginTop: "16px",
    },
    saveButton: {
      padding: "12px 24px",
      backgroundColor: "#4263eb",
      color: "#fff",
      border: "none",
      borderRadius: "8px",
      cursor: "pointer",
      fontWeight: "600",
      fontSize: "16px",
      display: "flex",
      alignItems: "center",
      gap: "8px",
      transition: "background-color 0.2s ease",
      flex: "1",
      justifyContent: "center",
      marginRight: "12px",
    },
    cancelButton: {
      padding: "12px 24px",
      backgroundColor: "#f1f3f5",
      color: "#495057",
      border: "none",
      borderRadius: "8px",
      cursor: "pointer",
      fontWeight: "600",
      fontSize: "16px",
      display: "flex",
      alignItems: "center",
      gap: "8px",
      transition: "background-color 0.2s ease",
      flex: "1",
      justifyContent: "center",
    },
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setAppointmentData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Updated Appointment Data:", appointmentData);
    // Later, you can make an API call to update this data in the backend
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>Edit Appointment Details</h1>
        <p style={styles.subtitle}>Update appointment information and preferences</p>
      </div>
      
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.formRow}>
          {/* Appointment Date */}
          <div style={styles.formGroup}>
            <label htmlFor="appointmentDate" style={styles.label}>Appointment Date</label>
            <div style={styles.inputWrapper}>
              <FaClipboardCheck style={styles.icon} size={16} />
              <input
                id="appointmentDate"
                type="date"
                name="appointmentDate"
                value={appointmentData.appointmentDate}
                onChange={handleChange}
                style={styles.input}
              />
            </div>
          </div>
          
          {/* Appointment Time */}
          <div style={styles.formGroup}>
            <label htmlFor="appointmentTime" style={styles.label}>Appointment Time</label>
            <div style={styles.inputWrapper}>
              <FaClipboardCheck style={styles.icon} size={16} />
              <input
                id="appointmentTime"
                type="time"
                name="appointmentTime"
                value={appointmentData.appointmentTime}
                onChange={handleChange}
                style={styles.input}
              />
            </div>
          </div>
        </div>
        
        {/* Doctor Name */}
        <div style={styles.formGroup}>
          <label htmlFor="doctorName" style={styles.label}>Doctor Name</label>
          <div style={styles.inputWrapper}>
            <FaUserMd style={styles.icon} size={16} />
            <input
              id="doctorName"
              type="text"
              name="doctorName"
              value={appointmentData.doctorName}
              onChange={handleChange}
              style={styles.input}
              placeholder="Enter doctor's name"
            />
          </div>
        </div>

        {/* Consultation Place */}
        <div style={styles.formGroup}>
          <label htmlFor="consultationPlace" style={styles.label}>Place of Consultation</label>
          <div style={styles.inputWrapper}>
            <FaMapMarkerAlt style={styles.icon} size={16} />
            <input
              id="consultationPlace"
              type="text"
              name="consultationPlace"
              value={appointmentData.consultationPlace}
              onChange={handleChange}
              style={styles.input}
              placeholder="Enter consultation location"
            />
          </div>
        </div>

        {/* Reason for Appointment */}
        <div style={styles.formGroup}>
          <label htmlFor="appointmentReason" style={styles.label}>Reason for Appointment</label>
          <div style={styles.inputWrapper}>
            <FaNotesMedical style={styles.icon} size={16} />
            <input
              id="appointmentReason"
              type="text"
              name="appointmentReason"
              value={appointmentData.appointmentReason}
              onChange={handleChange}
              style={styles.input}
              placeholder="Enter reason for appointment"
            />
          </div>
        </div>

        <div style={styles.formRow}>
          {/* Consultation Status */}
          <div style={styles.formGroup}>
            <label htmlFor="consultationStatus" style={styles.label}>Consultation Status</label>
            <div style={styles.inputWrapper}>
              <FaClipboardCheck style={styles.icon} size={16} />
              <select
                id="consultationStatus"
                name="consultationStatus"
                value={appointmentData.consultationStatus}
                onChange={handleChange}
                style={styles.select}
              >
                <option value="Completed">Completed</option>
                <option value="Scheduled">Scheduled</option>
                <option value="Cancelled">Cancelled</option>
              </select>
            </div>
          </div>

          {/* Payment Status */}
          <div style={styles.formGroup}>
            <label htmlFor="paymentStatus" style={styles.label}>Payment Status</label>
            <div style={styles.inputWrapper}>
              <FaMoneyBillWave style={styles.icon} size={16} />
              <select
                id="paymentStatus"
                name="paymentStatus"
                value={appointmentData.paymentStatus}
                onChange={handleChange}
                style={styles.select}
              >
                <option value="Paid">Paid</option>
                <option value="Pending">Pending</option>
              </select>
            </div>
          </div>
        </div>

        {/* Additional Data */}
        <div style={styles.formGroup}>
          <label htmlFor="additionalData" style={styles.label}>Additional Information</label>
          <div style={styles.inputWrapper}>
            <FaNotesMedical style={styles.textareaIcon} size={16} />
            <textarea
              id="additionalData"
              name="additionalData"
              value={appointmentData.additionalData}
              onChange={handleChange}
              style={styles.textarea}
              placeholder="Enter additional information"
            />
          </div>
        </div>

        {/* Buttons */}
        <div style={styles.buttonGroup}>
          <button type="submit" style={styles.saveButton}>
            <FaSave size={16} />
            Save Changes
          </button>
          <button type="button" style={styles.cancelButton}>
            <FaTimes size={16} />
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditAppointmentDetails;
