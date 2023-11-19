import { useCallback } from "react";
import styles from "./page5.module.css";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'font-awesome/css/font-awesome.min.css';

const Page6 = () => {
  const [shapCollaboValues, setShapCollaboValues] = useState({ PositiveFeature: [], NegativeFeature: [] });
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  const onArrowRightOutlinedIconClick7 = useCallback(() => {
    navigate("/7");
  }, [navigate]);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:8000/get_movie_recommendations');
      setShapCollaboValues(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching features', error);
      const fakeFeaturesCollaboData = {
        PositiveFeature: [
          { name: "Gender", shapValue: 0.5 },
          { name: "Age", shapValue: 0.2 },
          { name: "Drama", shapValue: 0.8 }
        ],
        NegativeFeature: [
          { name: "Action", shapValue: -0.1 },
          { name: "Comedy", shapValue: -0.3 },
          { name: "Romance", shapValue: -0.6 }
        ],
      };
      setShapCollaboValues(fakeFeaturesCollaboData);
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
    <div className={styles.page1}>
      <img className={styles.page1Child} alt="" src="./back.png" />
      <img className={styles.page1Item} alt="" />
      <b className={styles.b}>
        <p className={styles.p}>결과 1.</p>
        <p className={styles.p1}>아래에 같은 이유들이 추천에 영향을 주었어요</p>
      </b>
      <div className={styles.component1} style={{ display: 'flex', flexDirection: 'row' }}>
        {loading ? (
          <div style={{ margin: '5px', marginTop: '30px', width: '350px', height: '50px' }}>
            <i className="fa fa-spinner fa-spin" style={{ fontSize: '35px', color: 'blue' }} />
            <span style={{ margin: '5px', marginTop: '30px', width: '350px', height: '50px' }}>{" "}로딩 중...</span>
          </div>
        ) : (
          <div className={styles.component9Item} />
        )}
        {!loading && (
          <ul style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
            <div style={{ margin: '5px', marginTop: '0px', width: '250px', height: '50px' }} > 아래에 같은 이유들이 추천에 긍정적인 영향을 주었어요</div>
            {shapCollaboValues.PositiveFeature.map((feature) => (
              <li key={feature} style={{ listStyleType: 'none' }}>
                <div className={styles.featureContainer}>
                  <button style={{ width: '77px', height: '50px', backgroundColor: 'lightblue', marginBottom: '10px', listStyleType: 'none' }} className={styles.featureName}>{feature.name}</button>
                  <button style={{ width: '77px', height: '50px', backgroundColor: 'lightblue', marginBottom: '10px', listStyleType: 'none' }} className={styles.featureName}>Positive</button>
                </div>
              </li>
            ))}
            <div style={{ margin: '5px', marginTop: '30px', width: '250px', height: '50px' }} > 아래에 같은 이유들이 추천에 부정적인 영향을 주었어요</div>
            {shapCollaboValues.NegativeFeature.map((feature) => (
              <li key={feature} style={{ listStyleType: 'none' }}>
                <div className={styles.featureContainer}>
                  <button style={{ width: '77px', height: '50px', backgroundColor: 'lightblue', marginBottom: '10px', listStyleType: 'none' }} className={styles.featureName}>{feature.name}</button>
                  <button style={{ width: '77px', height: '50px', backgroundColor: 'lightblue', marginBottom: '10px', listStyleType: 'none' }} className={styles.featureName}>Negative</button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div >
      <div></div>
      <div className={styles.component9Item} />
      <div>
        <img
          className={styles.arrowrightoutlinedIcon}
          alt=""
          src="/arrowrightoutlined.png"
          onClick={onArrowRightOutlinedIconClick7}
        />
        <b className={styles.next}>Next?</b>
      </div>
    </div >
  );
}

export default Page6;
