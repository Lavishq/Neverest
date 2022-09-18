import React from "react";
import styles from "../../styles/Home.module.css";

export default function reviews() {
  return (
    <div className={styles.theWholeBody}>
    <div className={styles.reviewContainer}>
      <div className={styles.pfpUsernameRating}>
        <img className={styles.profilePic} src="https://static.vecteezy.com/system/resources/previews/002/318/271/original/user-profile-icon-free-vector.jpg"></img>
        <p className={styles.userNameReviews}>User 1</p>
        <p className={styles.reviewRating}>4.1 • 5</p>
      </div>
      <p className={styles.review}>Fantastic Website!</p>
    </div>
    </div>
  );
}
