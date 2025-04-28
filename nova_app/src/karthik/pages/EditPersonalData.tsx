import React, { useState } from "react";
import { FaUserAlt, FaWeight, FaRulerVertical, FaVenusMars, FaTint, FaHistory, FaStickyNote, FaUserFriends, FaPhone, FaUserPlus, FaSave, FaTrash, FaUserTie } from "react-icons/fa";

// Define the type for the contact
type EmergencyContact = {
  name: string;
  relationship: string;
  phone: string;
};

const EditPersonalData: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "John Doe",
    age: 29,
    weight: "75 kg",
    height: "5'9\"",
    sex: "Male",
    bloodGroup: "O+",
    historyOfDiseases: "None",
    additionalData: "No additional data",
    emergencyContacts: [
      { name: "Jane Doe", relationship: "Wife", phone: "+1234567890" },
      { name: "Mark Doe", relationship: "Father", phone: "+0987654321" },
    ] as EmergencyContact[], // Type casting the emergency contacts
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
      margin: 0,
      display: "flex",
      alignItems: "center",
      gap: "12px",
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
      marginBottom: "8px",
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
    textarea: {
      width: "100%",
      padding: "12px 12px 12px 40px",
      fontSize: "16px",
      borderRadius: "8px",
      border: "1px solid #ced4da",
      backgroundColor: "#fff",
      minHeight: "100px",
      resize: "vertical" as const,
      transition: "border-color 0.2s ease, box-shadow 0.2s ease",
      outline: "none",
      boxSizing: "border-box" as const,
      fontFamily: "inherit",
    },
    sectionTitle: {
      fontSize: "20px",
      fontWeight: "600",
      color: "#343a40",
      marginTop: "30px",
      marginBottom: "20px",
      display: "flex",
      alignItems: "center",
      gap: "10px",
      paddingBottom: "8px",
      borderBottom: "1px solid #e9ecef",
    },
    contactCard: {
      backgroundColor: "#ffffff",
      borderRadius: "8px",
      padding: "20px",
      marginBottom: "24px",
      boxShadow: "0 2px 6px rgba(0, 0, 0, 0.04)",
    },
    contactHeader: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "16px",
    },
    contactTitle: {
      fontSize: "18px",
      fontWeight: "600",
      color: "#343a40",
      display: "flex",
      alignItems: "center",
      gap: "8px",
    },
    removeButton: {
      padding: "8px",
      backgroundColor: "#fff0f0",
      color: "#e03131",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      transition: "background-color 0.2s ease",
      "&:hover": {
        backgroundColor: "#ffe3e3",
      },
    },
    addButton: {
      padding: "12px 16px",
      backgroundColor: "#d3f9d8",
      color: "#2b8a3e",
      border: "none",
      borderRadius: "8px",
      cursor: "pointer",
      fontWeight: "600",
      fontSize: "16px",
      display: "flex",
      alignItems: "center",
      gap: "8px",
      justifyContent: "center",
      transition: "background-color 0.2s ease",
      marginTop: "16px",
      marginBottom: "24px",
      alignSelf: "flex-start",
    },
    saveButton: {
      padding: "14px 24px",
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
      justifyContent: "center",
      transition: "background-color 0.2s ease",
      marginTop: "16px",
    },
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleContactChange = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const updatedContacts = [...formData.emergencyContacts];
    updatedContacts[index] = { ...updatedContacts[index], [name]: value };
    setFormData({ ...formData, emergencyContacts: updatedContacts });
  };

  const handleAddContact = () => {
    setFormData((prevData) => ({
      ...prevData,
      emergencyContacts: [
        ...prevData.emergencyContacts,
        { name: "", relationship: "", phone: "" },
      ],
    }));
  };

  const handleRemoveContact = (index: number) => {
    const updatedContacts = formData.emergencyContacts.filter((_, i) => i !== index);
    setFormData({ ...formData, emergencyContacts: updatedContacts });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Updated Personal Data:", formData);
    // You can connect this to backend API later
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>
          <FaUserAlt color="#4263eb" size={24} />
          Edit Personal Details
        </h1>
        <p style={styles.subtitle}>Update your personal information and emergency contacts</p>
      </div>
      
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.formRow}>
          {/* Name */}
          <div style={styles.formGroup}>
            <label htmlFor="name" style={styles.label}>Name</label>
            <div style={styles.inputWrapper}>
              <FaUserAlt style={styles.icon} size={16} />
              <input
                id="name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                style={styles.input}
              />
            </div>
          </div>

          {/* Age */}
          <div style={styles.formGroup}>
            <label htmlFor="age" style={styles.label}>Age</label>
            <div style={styles.inputWrapper}>
              <FaUserAlt style={styles.icon} size={16} />
              <input
                id="age"
                type="number"
                name="age"
                value={formData.age}
                onChange={handleChange}
                style={styles.input}
              />
            </div>
          </div>
        </div>

        <div style={styles.formRow}>
          {/* Weight */}
          <div style={styles.formGroup}>
            <label htmlFor="weight" style={styles.label}>Weight</label>
            <div style={styles.inputWrapper}>
              <FaWeight style={styles.icon} size={16} />
              <input
                id="weight"
                type="text"
                name="weight"
                value={formData.weight}
                onChange={handleChange}
                style={styles.input}
              />
            </div>
          </div>

          {/* Height */}
          <div style={styles.formGroup}>
            <label htmlFor="height" style={styles.label}>Height</label>
            <div style={styles.inputWrapper}>
              <FaRulerVertical style={styles.icon} size={16} />
              <input
                id="height"
                type="text"
                name="height"
                value={formData.height}
                onChange={handleChange}
                style={styles.input}
              />
            </div>
          </div>
        </div>

        <div style={styles.formRow}>
          {/* Sex */}
          <div style={styles.formGroup}>
            <label htmlFor="sex" style={styles.label}>Sex</label>
            <div style={styles.inputWrapper}>
              <FaVenusMars style={styles.icon} size={16} />
              <input
                id="sex"
                type="text"
                name="sex"
                value={formData.sex}
                onChange={handleChange}
                style={styles.input}
              />
            </div>
          </div>

          {/* Blood Group */}
          <div style={styles.formGroup}>
            <label htmlFor="bloodGroup" style={styles.label}>Blood Group</label>
            <div style={styles.inputWrapper}>
              <FaTint style={styles.icon} size={16} />
              <input
                id="bloodGroup"
                type="text"
                name="bloodGroup"
                value={formData.bloodGroup}
                onChange={handleChange}
                style={styles.input}
              />
            </div>
          </div>
        </div>

        {/* History of Diseases */}
        <div style={styles.formGroup}>
          <label htmlFor="historyOfDiseases" style={styles.label}>History of Diseases</label>
          <div style={styles.inputWrapper}>
            <FaHistory style={styles.textareaIcon} size={16} />
            <textarea
              id="historyOfDiseases"
              name="historyOfDiseases"
              value={formData.historyOfDiseases}
              onChange={handleChange}
              style={styles.textarea}
            />
          </div>
        </div>

        {/* Additional Personal Data */}
        <div style={styles.formGroup}>
          <label htmlFor="additionalData" style={styles.label}>Additional Personal Data</label>
          <div style={styles.inputWrapper}>
            <FaStickyNote style={styles.textareaIcon} size={16} />
            <textarea
              id="additionalData"
              name="additionalData"
              value={formData.additionalData}
              onChange={handleChange}
              style={styles.textarea}
            />
          </div>
        </div>

        {/* Emergency Contacts Section */}
        <h3 style={styles.sectionTitle}>
          <FaUserFriends color="#4263eb" size={20} />
          Emergency Contacts
        </h3>
        
        {formData.emergencyContacts.map((contact, index) => (
          <div key={index} style={styles.contactCard}>
            <div style={styles.contactHeader}>
              <h4 style={styles.contactTitle}>
                <FaUserTie color="#4263eb" />
                Contact {index + 1}
              </h4>
              <button
                type="button"
                onClick={() => handleRemoveContact(index)}
                style={styles.removeButton}
                title="Remove Contact"
              >
                <FaTrash size={16} />
              </button>
            </div>
            
            <div style={styles.formGroup}>
              <label htmlFor={`contact-name-${index}`} style={styles.label}>Name</label>
              <div style={styles.inputWrapper}>
                <FaUserAlt style={styles.icon} size={16} />
                <input
                  id={`contact-name-${index}`}
                  type="text"
                  name="name"
                  value={contact.name}
                  onChange={(e) => handleContactChange(index, e)}
                  style={styles.input}
                  placeholder="Contact name"
                />
              </div>
            </div>

            <div style={styles.formGroup}>
              <label htmlFor={`contact-relationship-${index}`} style={styles.label}>Relationship</label>
              <div style={styles.inputWrapper}>
                <FaUserTie style={styles.icon} size={16} />
                <input
                  id={`contact-relationship-${index}`}
                  type="text"
                  name="relationship"
                  value={contact.relationship}
                  onChange={(e) => handleContactChange(index, e)}
                  style={styles.input}
                  placeholder="Relationship to you"
                />
              </div>
            </div>

            <div style={styles.formGroup}>
              <label htmlFor={`contact-phone-${index}`} style={styles.label}>Phone</label>
              <div style={styles.inputWrapper}>
                <FaPhone style={styles.icon} size={16} />
                <input
                  id={`contact-phone-${index}`}
                  type="text"
                  name="phone"
                  value={contact.phone}
                  onChange={(e) => handleContactChange(index, e)}
                  style={styles.input}
                  placeholder="Phone number"
                />
              </div>
            </div>
          </div>
        ))}

        {/* Add new emergency contact */}
        <button
          type="button"
          onClick={handleAddContact}
          style={styles.addButton}
        >
          <FaUserPlus size={16} />
          Add Emergency Contact
        </button>

        <button type="submit" style={styles.saveButton}>
          <FaSave size={16} />
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default EditPersonalData;
