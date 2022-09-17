import React from "react";
import styles from "../../styles/Home.module.css";

export default function reviews() {
  return (
    <div className={styles.reviewContainer}>
      <div className={styles.pfpUsernameRating}>
        <>IMG</>
        <p>User 1</p>
        <p>3.9 5</p>
      </div>
      <p className={styles.review}>Fantastic Website!</p>
    </div>
  );
}
