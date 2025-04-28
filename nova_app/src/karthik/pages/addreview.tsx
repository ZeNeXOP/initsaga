import React, { useState } from "react";
import { FaStar, FaRegStar, FaPaperPlane, FaUser, FaComment } from "react-icons/fa";

const AddReview: React.FC = () => {
  const [formData, setFormData] = useState({
    reviewerName: "",
    rating: 0,
    comment: "",
  });

  // Styles
  const styles = {
    container: {
      padding: "32px",
      maxWidth: "600px",
      margin: "0 auto",
      backgroundColor: "#f8f9fa",
      borderRadius: "12px",
      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
    },
    header: {
      marginBottom: "24px",
      textAlign: "center" as const,
      borderBottom: "1px solid #e9ecef",
      paddingBottom: "16px",
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
      display: "flex",
      alignItems: "center",
    },
    icon: {
      position: "absolute" as const,
      left: "12px",
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
      "&:focus": {
        borderColor: "#4263eb",
        boxShadow: "0 0 0 3px rgba(66, 99, 235, 0.2)",
      },
    },
    textarea: {
      width: "100%",
      padding: "12px 12px 12px 40px",
      fontSize: "16px",
      borderRadius: "8px",
      border: "1px solid #ced4da",
      backgroundColor: "#fff",
      height: "120px",
      resize: "vertical" as const,
      transition: "border-color 0.2s ease, box-shadow 0.2s ease",
      outline: "none",
      boxSizing: "border-box" as const,
      fontFamily: "inherit",
      "&:focus": {
        borderColor: "#4263eb",
        boxShadow: "0 0 0 3px rgba(66, 99, 235, 0.2)",
      },
    },
    ratingContainer: {
      display: "flex",
      marginTop: "8px",
      gap: "4px",
    },
    star: {
      cursor: "pointer",
      fontSize: "28px",
      transition: "transform 0.2s ease",
      "&:hover": {
        transform: "scale(1.2)",
      },
    },
    button: {
      padding: "12px",
      backgroundColor: "#4263eb",
      color: "white",
      border: "none",
      borderRadius: "8px",
      cursor: "pointer",
      fontSize: "16px",
      fontWeight: "600",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "8px",
      transition: "background-color 0.2s ease, transform 0.1s ease",
      "&:hover": {
        backgroundColor: "#3b5bdb",
      },
      "&:active": {
        transform: "scale(0.98)",
      },
    },
    ratingLabel: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },
    ratingText: {
      fontSize: "14px",
      color: "#6c757d",
    },
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleRatingChange = (rating: number) => {
    setFormData((prev) => ({
      ...prev,
      rating: rating,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("New Review Submitted:", formData);
    // Later connect to backend or state management
  };

  const renderRatingText = () => {
    switch (formData.rating) {
      case 1: return "Poor";
      case 2: return "Fair";
      case 3: return "Good";
      case 4: return "Very Good";
      case 5: return "Excellent";
      default: return "Select a rating";
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>Add Your Review</h1>
        <p style={styles.subtitle}>Share your experience with the doctor</p>
      </div>
      
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.formGroup}>
          <label htmlFor="reviewerName" style={styles.label}>Your Name</label>
          <div style={styles.inputWrapper}>
            <FaUser style={styles.icon} size={16} />
            <input
              id="reviewerName"
              type="text"
              name="reviewerName"
              value={formData.reviewerName}
              onChange={handleChange}
              required
              style={styles.input}
              placeholder="Enter your name"
            />
          </div>
        </div>

        <div style={styles.formGroup}>
          <div style={styles.ratingLabel}>
            <label style={styles.label}>Rating</label>
            <span style={styles.ratingText}>{renderRatingText()}</span>
          </div>
          <div style={styles.ratingContainer}>
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                onClick={() => handleRatingChange(star)}
                style={styles.star}
              >
                {star <= formData.rating ? (
                  <FaStar color="#fcc419" size={28} />
                ) : (
                  <FaRegStar color="#dee2e6" size={28} />
                )}
              </span>
            ))}
          </div>
        </div>

        <div style={styles.formGroup}>
          <label htmlFor="comment" style={styles.label}>Your Comments</label>
          <div style={styles.inputWrapper}>
            <FaComment style={{...styles.icon, top: "12px"}} size={16} />
            <textarea
              id="comment"
              name="comment"
              value={formData.comment}
              onChange={handleChange}
              required
              style={styles.textarea}
              placeholder="Tell us about your experience"
            />
          </div>
        </div>

        <button type="submit" style={styles.button}>
          <FaPaperPlane size={16} />
          Submit Review
        </button>
      </form>
    </div>
  );
};

export default AddReview;