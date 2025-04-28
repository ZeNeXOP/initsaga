import React, { useState } from "react";
import { FaHeart, FaRegHeart, FaStar, FaStarHalfAlt, FaUserMd, FaUsers, FaAward } from "react-icons/fa";

const DoctorDetails: React.FC = () => {
  const [isFavourite, setIsFavourite] = useState(false);

  const doctor = {
    name: "Dr. John Smith",
    domain: "Cardiology",
    specialty: "Heart Surgery",
    patientCount: 1500,
    rating: 4.5, // Out of 5
    profilePic: "https://via.placeholder.com/100", // Replace with actual image URL
    reviews: [
      { reviewer: "Alice", comment: "Excellent doctor, very caring!", date: "October 12, 2023" },
      { reviewer: "Bob", comment: "Helped me recover quickly. Highly recommended!", date: "September 5, 2023" },
      { reviewer: "Charlie", comment: "Good experience and professional staff.", date: "August 21, 2023" },
    ],
  };

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
    profileSection: {
      display: "flex",
      alignItems: "center",
      marginBottom: "24px",
      padding: "24px",
      backgroundColor: "#ffffff",
      borderRadius: "8px",
      boxShadow: "0 2px 6px rgba(0, 0, 0, 0.04)",
    },
    profileImage: {
      width: "120px",
      height: "120px",
      borderRadius: "50%",
      objectFit: "cover" as const,
      marginRight: "24px",
      border: "4px solid #e7f5ff",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    },
    doctorInfo: {
      flexGrow: 1,
    },
    doctorName: {
      fontSize: "28px",
      fontWeight: "700",
      color: "#343a40",
      margin: 0,
      marginBottom: "8px",
    },
    doctorSpecialty: {
      fontSize: "18px",
      color: "#4a5568",
      margin: "8px 0",
      display: "flex",
      alignItems: "center",
      gap: "8px",
    },
    doctorPatients: {
      margin: "8px 0",
      color: "#718096",
      display: "flex",
      alignItems: "center",
      gap: "8px",
    },
    favouriteButton: {
      background: "none",
      border: "none",
      cursor: "pointer",
      width: "48px",
      height: "48px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      transition: "transform 0.2s ease",
    },
    statsSection: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
      gap: "16px",
      marginBottom: "24px",
    },
    statCard: {
      backgroundColor: "#ffffff",
      borderRadius: "8px",
      padding: "16px",
      textAlign: "center" as const,
      boxShadow: "0 2px 6px rgba(0, 0, 0, 0.04)",
    },
    statIcon: {
      fontSize: "24px",
      color: "#4263eb",
      marginBottom: "8px",
    },
    statValue: {
      fontSize: "24px",
      fontWeight: "700",
      color: "#343a40",
      margin: "8px 0",
    },
    statLabel: {
      fontSize: "14px",
      color: "#718096",
    },
    ratingSection: {
      display: "flex",
      alignItems: "center",
      marginBottom: "24px",
      padding: "16px",
      backgroundColor: "#ffffff",
      borderRadius: "8px",
      boxShadow: "0 2px 6px rgba(0, 0, 0, 0.04)",
    },
    starContainer: {
      display: "flex",
      marginRight: "16px",
    },
    ratingText: {
      fontSize: "18px",
      fontWeight: "600",
      color: "#343a40",
    },
    reviewsSection: {
      marginBottom: "24px",
    },
    reviewsHeader: {
      fontSize: "22px",
      fontWeight: "600",
      color: "#343a40",
      marginBottom: "16px",
      display: "flex",
      alignItems: "center",
      gap: "8px",
    },
    reviewCard: {
      backgroundColor: "#ffffff",
      borderRadius: "8px",
      padding: "16px",
      marginBottom: "16px",
      boxShadow: "0 2px 6px rgba(0, 0, 0, 0.04)",
      borderLeft: "4px solid #4263eb",
    },
    reviewerName: {
      fontSize: "16px",
      fontWeight: "600",
      color: "#343a40",
      marginBottom: "4px",
    },
    reviewDate: {
      fontSize: "14px",
      color: "#718096",
      marginBottom: "8px",
    },
    reviewComment: {
      fontSize: "16px",
      color: "#4a5568",
      lineHeight: "1.6",
    },
    addReviewButton: {
      padding: "12px 24px",
      backgroundColor: "#4263eb",
      color: "white",
      border: "none",
      borderRadius: "8px",
      cursor: "pointer",
      fontWeight: "600",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "8px",
      transition: "background-color 0.2s ease",
      width: "100%",
      fontSize: "16px",
    },
    noReviews: {
      textAlign: "center" as const,
      padding: "24px",
      backgroundColor: "#ffffff",
      borderRadius: "8px",
      color: "#718096",
      fontStyle: "italic",
    },
  };

  const handleFavouriteToggle = () => {
    setIsFavourite(!isFavourite);
  };

  const renderStars = (rating: number) => {
    return (
      <div style={styles.starContainer}>
        {[...Array(5)].map((_, index) => {
          if (index < Math.floor(rating)) {
            return <FaStar key={index} size={24} color="#fcc419" />;
          } else if (index === Math.floor(rating) && rating % 1 !== 0) {
            return <FaStarHalfAlt key={index} size={24} color="#fcc419" />;
          } else {
            return <FaStar key={index} size={24} color="#e9ecef" />;
          }
        })}
      </div>
    );
  };

  return (
    <div style={styles.container}>
      {/* Doctor Basic Info */}
      <div style={styles.profileSection}>
        <img
          src={doctor.profilePic}
          alt="Doctor"
          style={styles.profileImage}
        />
        <div style={styles.doctorInfo}>
          <h1 style={styles.doctorName}>{doctor.name}</h1>
          <p style={styles.doctorSpecialty}>
            <FaUserMd color="#4263eb" />
            {doctor.domain} - {doctor.specialty}
          </p>
          <p style={styles.doctorPatients}>
            <FaUsers color="#718096" />
            {doctor.patientCount} patients treated
          </p>
        </div>
        <button style={styles.favouriteButton} onClick={handleFavouriteToggle} aria-label="Add to favorites">
          {isFavourite ? (
            <FaHeart size={32} color="#e53e3e" />
          ) : (
            <FaRegHeart size={32} color="#718096" />
          )}
        </button>
      </div>

      {/* Stats Section */}
      <div style={styles.statsSection}>
        <div style={styles.statCard}>
          <FaAward color="#4263eb" size={24} />
          <div style={styles.statValue}>{doctor.domain}</div>
          <div style={styles.statLabel}>Specialization</div>
        </div>
        <div style={styles.statCard}>
          <FaUsers color="#4263eb" size={24} />
          <div style={styles.statValue}>{doctor.patientCount}</div>
          <div style={styles.statLabel}>Patients</div>
        </div>
        <div style={styles.statCard}>
          <FaStar color="#4263eb" size={24} />
          <div style={styles.statValue}>{doctor.rating.toFixed(1)}</div>
          <div style={styles.statLabel}>Rating</div>
        </div>
      </div>

      {/* Rating Section */}
      <div style={styles.ratingSection}>
        {renderStars(doctor.rating)}
        <span style={styles.ratingText}>{doctor.rating.toFixed(1)} out of 5.0</span>
      </div>

      {/* Reviews Section */}
      <div style={styles.reviewsSection}>
        <h2 style={styles.reviewsHeader}>
          <FaUsers color="#4263eb" />
          Patient Reviews
        </h2>
        
        {doctor.reviews.length === 0 ? (
          <div style={styles.noReviews}>No reviews yet.</div>
        ) : (
          doctor.reviews.map((review, index) => (
            <div key={index} style={styles.reviewCard}>
              <div style={styles.reviewerName}>{review.reviewer}</div>
              <div style={styles.reviewDate}>{review.date}</div>
              <p style={styles.reviewComment}>{review.comment}</p>
            </div>
          ))
        )}
      </div>

      {/* Add Review Button */}
      <button style={styles.addReviewButton}>
        Add Your Review
      </button>
    </div>
  );
};

export default DoctorDetails;
