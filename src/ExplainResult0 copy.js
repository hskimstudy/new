import { useCallback, useEffect, useState } from "react";
import styles from "./MainUI.module.css";
import { useLocation, useNavigate } from "react-router-dom";
import React from "react";
import "font-awesome/css/font-awesome.min.css";


const ExplainResult1 = (props) => {
  const location = useLocation();
  const navigate = useNavigate();

  const recommendExplanationP = location.state ? location.state.recommendExplanationP : [];
  const recommendExplanationN = location.state ? location.state.recommendExplanationN : [];

  console.log(recommendExplanationP)

  const onArrowRightOutlinedIconClickExplainReHome = useCallback(() => {
    navigate("/",);
  }, [navigate])

  return (
    <div className={styles.home}>
      <div className={styles.homeChild}>
        <img className={styles.homeChild} src="./back.png" alt="Back" />
        <div className={styles.homeChild}>
          <div
            style={{
              marginTop: "10%",
              fontWeight: "bold",
              textAlign: "left",
              marginLeft: "28px",
              fontSize: "135%",
              marginBottom: "2%",
              marginRight: "25px",
              color: "rgba(43, 109, 150, 0.9)",
            }}
          >
            인공지능이 영화를 추천한 이유
          </div>
          <div
            style={{
              marginTop: "1%",
              fontWeight: "bold",
              textAlign: "left",
              marginLeft: "30px",
              fontSize: "105%",
              marginBottom: "7%",
              marginRight: "25px",
              color: "rgba(43, 109, 150, 0.9)",
            }}
          >
            당신의 위한 영화 추천에서 <br></br> 영향을 많이 미친 요인들을 알려드려요 </div>
          <div>
            <ul>
              {recommendExplanationP.map((resc) => (
                <li
                  key={resc.feature}
                  style={{
                    padding: '5px 1px 7px 5px',
                    marginBottom: '5%',
                    borderBottom: '1px solid #efefef',
                    fontSize: '19px',
                    listStyle: 'decimal',
                    display: 'flex',
                    alignItems: 'center'
                  }}
                >
                  <strong>{resc.feature}</strong>
                  <span
                    style={{
                      padding: '5px 1px 7px 5px',
                      fontSize: '19px',
                      marginLeft: '10px'
                    }}
                  >

                  </span>
                </li>
              ))}

              {recommendExplanationN.map((resc) => (
                <li
                  key={resc.feature}
                  style={{
                    padding: '5px 1px 7px 5px',
                    marginBottom: '5%',
                    borderBottom: '1px solid #efefef',
                    fontSize: '19px',
                    listStyle: 'none',
                    display: 'flex',
                    alignItems: 'center'
                  }}
                >
                  <strong>{resc.feature}</strong>
                  <span
                    style={{
                      padding: '5px 1px 7px 5px',
                      fontSize: '19px',
                      marginLeft: '10px'
                    }}
                  >
                  </span>
                  <span
                    style={{
                      padding: '5px 1px 7px 5px',
                      fontSize: '19px',
                      marginLeft: '10px'
                    }}
                  >
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div
            style={{
              marginTop: "20vh",
              fontSize: "180%",
              marginLeft: "55%",
              fontWeight: "800",
              fontFamily: "Helvetica, sans-serif",
              color: "rgba(43, 109, 150, 0.9)",
            }}
            onClick={onArrowRightOutlinedIconClickExplainReHome}
          >
            Next ▶
          </div>
        </div>
      </div >
    </div >
  );
};

export default ExplainResult1;
