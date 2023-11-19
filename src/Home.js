import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Home.module.css";
import React from 'react';

const Home = () => {
  const navigate = useNavigate();

  const onArrowRightOutlinedIconClick = useCallback(() => {
    navigate("/Age");
  }, [navigate]);

  return (
    <div className={styles.home}>
      <img className={styles.homeChild} alt=""
        src="./back.png" />
      <p className={styles.everythingIsReadyRecommender}>RE:COMMENDER</p>

      <p className={styles.x}>X</p>
      {/* <p className={styles.everythingIsReadyRecommenderWith}>with <span style={{ color: 'rgba(99, 152, 194, 1)' }}>A.I</span></p> */}
      <div className={styles.x2}
        onClick={onArrowRightOutlinedIconClick}>Start ▶</div>
    </div>
  );
};

export default Home;