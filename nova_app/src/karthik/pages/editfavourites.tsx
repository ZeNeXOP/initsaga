import React, { useState } from "react";
import { FaUserMd, FaHospital, FaPills, FaPlus, FaTrash, FaSave } from "react-icons/fa";

const EditFavourites: React.FC = () => {
  const [favourites, setFavourites] = useState({
    doctors: [{ name: "", specialty: "" }],
    hospitals: [{ name: "" }],
    medicines: [{ name: "" }],
  });

  const handleDoctorChange = (index: number, field: string, value: string) => {
    const updatedDoctors = [...favourites.doctors];
    updatedDoctors[index] = { ...updatedDoctors[index], [field]: value };
    setFavourites({ ...favourites, doctors: updatedDoctors });
  };

  const handleHospitalChange = (index: number, value: string) => {
    const updatedHospitals = [...favourites.hospitals];
    updatedHospitals[index].name = value;
    setFavourites({ ...favourites, hospitals: updatedHospitals });
  };

  const handleMedicineChange = (index: number, value: string) => {
    const updatedMedicines = [...favourites.medicines];
    updatedMedicines[index].name = value;
    setFavourites({ ...favourites, medicines: updatedMedicines });
  };

  const addDoctor = () => {
    setFavourites({
      ...favourites,
      doctors: [...favourites.doctors, { name: "", specialty: "" }],
    });
  };

  const addHospital = () => {
    setFavourites({
      ...favourites,
      hospitals: [...favourites.hospitals, { name: "" }],
    });
  };

  const addMedicine = () => {
    setFavourites({
      ...favourites,
      medicines: [...favourites.medicines, { name: "" }],
    });
  };

  const removeDoctor = (index: number) => {
    const updatedDoctors = favourites.doctors.filter((_, i) => i !== index);
    setFavourites({ ...favourites, doctors: updatedDoctors });
  };

  const removeHospital = (index: number) => {
    const updatedHospitals = favourites.hospitals.filter((_, i) => i !== index);
    setFavourites({ ...favourites, hospitals: updatedHospitals });
  };

  const removeMedicine = (index: number) => {
    const updatedMedicines = favourites.medicines.filter((_, i) => i !== index);
    setFavourites({ ...favourites, medicines: updatedMedicines });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Updated Favourites:", favourites);
    // You can connect this to a backend API later
  };

  // Styles object
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
      display: "flex",
      alignItems: "center",
      gap: "12px",
    },
    subtitle: {
      fontSize: "16px",
      color: "#6c757d",
      margin: "0",
    },
    form: {
      width: "100%",
    },
    section: {
      marginBottom: "32px",
    },
    sectionTitle: {
      fontSize: "20px",
      fontWeight: "600",
      color: "#343a40",
      margin: "0 0 16px 0",
      display: "flex",
      alignItems: "center",
      gap: "10px",
      paddingBottom: "8px",
      borderBottom: "1px solid #e9ecef",
    },
    itemContainer: {
      backgroundColor: "#ffffff",
      borderRadius: "8px",
      padding: "16px",
      marginBottom: "16px",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.04)",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },
    inputs: {
      display: "flex",
      flexGrow: 1,
      gap: "12px",
    },
    input: {
      padding: "12px",
      fontSize: "16px",
      borderRadius: "6px",
      border: "1px solid #ced4da",
      width: "100%",
      outline: "none",
      transition: "border-color 0.2s ease",
      "&:focus": {
        borderColor: "#4263eb",
      },
    },
    removeButton: {
      background: "none",
      border: "none",
      color: "#e03131",
      cursor: "pointer",
      padding: "8px",
      borderRadius: "4px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      transition: "background-color 0.2s ease",
      "&:hover": {
        backgroundColor: "#fff5f5",
      },
    },
    addButton: {
      display: "flex",
      alignItems: "center",
      gap: "8px",
      padding: "10px 16px",
      backgroundColor: "#d3f9d8",
      color: "#2b8a3e",
      border: "none",
      borderRadius: "6px",
      cursor: "pointer",
      fontSize: "15px",
      fontWeight: "600",
      transition: "background-color 0.2s ease",
      marginBottom: "24px",
      "&:hover": {
        backgroundColor: "#b2f2bb",
      },
    },
    saveButton: {
      display: "flex",
      alignItems: "center",
      gap: "10px",
      padding: "14px 24px",
      backgroundColor: "#4263eb",
      color: "#fff",
      border: "none",
      borderRadius: "8px",
      cursor: "pointer",
      fontSize: "16px",
      fontWeight: "600",
      transition: "background-color 0.2s ease",
      marginTop: "16px",
      "&:hover": {
        backgroundColor: "#3b5bdb",
      },
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>
          <FaSave color="#4263eb" />
          Edit Favourites
        </h1>
        <p style={styles.subtitle}>Manage your favourite doctors, hospitals, and medicines</p>
      </div>

      <form onSubmit={handleSubmit} style={styles.form}>
        {/* Doctors Section */}
        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>
            <FaUserMd color="#4263eb" />
            Favourite Doctors
          </h2>
          
          {favourites.doctors.map((doctor, index) => (
            <div key={index} style={styles.itemContainer}>
              <div style={styles.inputs}>
                <input
                  type="text"
                  placeholder="Doctor Name"
                  value={doctor.name}
                  onChange={(e) => handleDoctorChange(index, "name", e.target.value)}
                  style={styles.input}
                />
                <input
                  type="text"
                  placeholder="Specialty"
                  value={doctor.specialty}
                  onChange={(e) => handleDoctorChange(index, "specialty", e.target.value)}
                  style={styles.input}
                />
              </div>
              <button 
                type="button" 
                onClick={() => removeDoctor(index)} 
                style={styles.removeButton}
                title="Remove Doctor"
              >
                <FaTrash size={16} />
              </button>
            </div>
          ))}
          
          <button type="button" onClick={addDoctor} style={styles.addButton}>
            <FaPlus size={14} />
            Add Doctor
          </button>
        </div>

        {/* Hospitals Section */}
        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>
            <FaHospital color="#4263eb" />
            Favourite Hospitals
          </h2>
          
          {favourites.hospitals.map((hospital, index) => (
            <div key={index} style={styles.itemContainer}>
              <div style={styles.inputs}>
                <input
                  type="text"
                  placeholder="Hospital Name"
                  value={hospital.name}
                  onChange={(e) => handleHospitalChange(index, e.target.value)}
                  style={styles.input}
                />
              </div>
              <button 
                type="button" 
                onClick={() => removeHospital(index)} 
                style={styles.removeButton}
                title="Remove Hospital"
              >
                <FaTrash size={16} />
              </button>
            </div>
          ))}
          
          <button type="button" onClick={addHospital} style={styles.addButton}>
            <FaPlus size={14} />
            Add Hospital
          </button>
        </div>

        {/* Medicines Section */}
        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>
            <FaPills color="#4263eb" />
            Favourite Medicines
          </h2>
          
          {favourites.medicines.map((medicine, index) => (
            <div key={index} style={styles.itemContainer}>
              <div style={styles.inputs}>
                <input
                  type="text"
                  placeholder="Medicine Name"
                  value={medicine.name}
                  onChange={(e) => handleMedicineChange(index, e.target.value)}
                  style={styles.input}
                />
              </div>
              <button 
                type="button" 
                onClick={() => removeMedicine(index)} 
                style={styles.removeButton}
                title="Remove Medicine"
              >
                <FaTrash size={16} />
              </button>
            </div>
          ))}
          
          <button type="button" onClick={addMedicine} style={styles.addButton}>
            <FaPlus size={14} />
            Add Medicine
          </button>
        </div>

        {/* Save Changes Button */}
        <button type="submit" style={styles.saveButton}>
          <FaSave size={18} />
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default EditFavourites;
