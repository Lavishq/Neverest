//Extension Window Resolution:  W -> 390 , H -> 590
//Inner Box resolution: W -> 325 , H -> 425

import React from "react";
import styles from "../../styles/Home.module.css";
import { CONTRACT_ADDRESS, ABI } from "/constants/index.js";
import { useRouter } from "next/dist/client/router";

const index = () => {
  const router = useRouter();
  let navi = () => router.push("/website1");

  return (
    <div className={styles.Container}>
      <div className={styles.mainContentContainer}>
        <div className={styles.nameAddressRating}>
          <p className={styles.website}>WEBSITE 1</p>
          <p className={styles.address}>0x00....0000</p>
          <p className={styles.rating}>4.9 • 5</p>
        </div>
        <div className={styles.reviewVoting}>
          <input
            type="text"
            placeholder="Write your review"
            className={styles.inputField}
          />

          <div className={styles.ratingButtons}>
            <button className={styles.like}>
              <img
                src="./arrow-up.png"
                alt="arrow-up"
                className={styles.arrowUp}
              ></img>
            </button>
            <button className={styles.dislike}>
              <img
                src="./arrow-down.png"
                alt="arrow-down"
                className={styles.arrowDown}
              ></img>
            </button>
          </div>
        </div>
        <div className={styles.redirectToReviews}>
          <p>View All Reviews</p>
          <img
            src="./arrow-right.png"
            alt="right-arrow"
            className={styles.redirectButton}
            onClick={navi}
          ></img>
        </div>
      </div>
      <div className={styles.biggestCircle}></div>
      <div className={styles.smallCircle1}></div>
      <div className={styles.smallCircle2}></div>
    </div>
  );
};

export default index;
