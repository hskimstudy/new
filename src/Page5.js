import { useCallback } from "react";
import styles from "./page5.module.css";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import axios from 'axios';


const Page5 = () => {
  const [features, setFeatures] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const onArrowRightOutlinedIconClick6 = useCallback(() => {
    navigate("/6");
  }, [navigate]);


  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:8000/get_movie_recommendations');
      setFeatures(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching features', error);
      const fakeFeatures = ["Gender", "Age", "Drama", "Action", "Comedy", "Romance"];
      setFeatures(fakeFeatures);
      setLoading(false);
    };
  };

  useEffect(() => {
    const fetchMovieData = async () => {
      const timeoutId = setTimeout(() => {
        setLoading(false);
      }, 8000);
      await fetchData();
      clearTimeout(timeoutId);
    };

    fetchMovieData();
  }, []);


  return (
    <div className={styles.page1} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <img className={styles.page1Child} alt="" src="./back.png" />
      <img className={styles.page1Item} alt="" />
      <b className={styles.b}>
        <p className={styles.p}>결과 1.</p>
        <p className={styles.p1}>아래에 같은 이유들이 추천에 영향을 주었어요</p>
      </b>
      <div className={styles.component1} style={{ textAlign: 'center', alignItems: 'flex-start' }}>
        {loading ? (
          <div style={{ margin: '5px', marginTop: '30px', width: '350px', height: '50px', textAlign: 'left' }}>
            <i className="fa fa-spinner fa-spin" style={{ fontSize: '35px', color: 'blue' }} />
            <span style={{ margin: '5px', marginTop: '30px', width: '350px', height: '50px' }}>{" "}로딩 중...</span>
          </div>
        ) : (
          <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '15px', listStyleType: 'none', textAlign: 'left' }}>
            {features.map(feature => (
              <li key={feature}>
                <button style={{ width: '77px', height: '50px', backgroundColor: 'lightblue', marginBottom: '1px', listStyleType: 'none' }} className={styles.featureName}>{feature}</button>
              </li>
            ))}
          </ul>
        )}
      </div>


      <div>
        <img
          className={styles.arrowrightoutlinedIcon}
          alt=""
          src="/arrowrightoutlined.png"
          onClick={onArrowRightOutlinedIconClick6}
        />
        <b className={styles.next}>Next?</b>
      </div>
    </div >
  );

}

export default Page5;
