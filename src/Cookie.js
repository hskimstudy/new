import { useCallback, useState } from "react";
import styles from "./MainUI.module.css";
import { useNavigate, useLocation } from "react-router-dom";
import React from "react";
import img from "./cookieImg.png";


const Cookie = () => {
  const navigate = useNavigate();
  const [isChecked, setIsChecked] = useState(false);

  const location = useLocation();
  const selectedAge = location.state.selectedAge;
  const selectedJob = location.state.selectedJob;
  const genreObject = location.state.genreObject;
  const selectedGender = location.state.selectedGender;

  const onCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };

  const onArrowRightOutlinedIconClickCookie = useCallback(() => {
    if (isChecked) {
      navigate("/Result", { state: { selectedAge, selectedJob, genreObject, selectedGender } });
      console.log(selectedAge, selectedJob, genreObject, selectedGender);
    }
  }, [navigate, isChecked, selectedAge, selectedJob, genreObject, selectedGender]);

  return (
    <div className={styles.home}>
      <div className={styles.homeChild}>
        <img className={styles.homeChild} src="./back.png" alt="Back" />
        <div className={styles.homeChild}>
          <div
            style={{
              marginTop: "10%",
              fontWeight: "bold",
              fontAlign: "left",
              marginLeft: "28px",
              fontSize: "120%",
              marginBottom: "1%",
              marginRight: "45px",
              color: 'rgba(43, 109, 150, 0.9)'
            }}
          > 마지막으로 추천을 위해 <br></br> 필수적인 쿠키를 수집할게요
          </div>
          <p style={{ fontSize: "13px", marginLeft: "28px", marginRight: "60px", marginBottom: "15%", color: 'rgba(43, 109, 150, 0.9)' }}>
            ( 브라우저 쿠키: 접속 시마다 새로운 정보로 바뀌는 임시 조각 기록 )
          </p>

          <div className="cookiebox" >
            <input
              type="checkbox"
              id="scales"
              name="scales"
              style={{
                input: "none", width: "28px", height: "28px", marginLeft: "25px",
                fontSize: "160%", fontWeight: 500, borderStyle: "groove"
              }}
              onChange={onCheckboxChange}
              checked={isChecked}
            />
            <label
              htmlFor="scales"
              style={{
                marginTop: "10%", fontWeight: "bold", fontAlign: "left", marginLeft: "8px",
                fontSize: "145%", marginBottom: "7%", marginRight: "25px", color: 'rgba(43, 109, 150, 0.9)'
              }}
            >
              Okay, let's go!
            </label>
          </div>

          <img className={`${styles.cookieImage} ${styles.homeChild}`} src={img} alt="Cookie" />

          <div
            style={{
              marginTop: "40vh", fontSize: "180%", marginLeft: "55%", fontWeight: "800",
              fontFamily: "Helvetica, sans-serif",
              color: isChecked ? "rgba(43, 109, 150, 0.9)" : "rgba(169, 169, 169, 0.5)"
            }}
            onClick={onArrowRightOutlinedIconClickCookie}
          >
            Next ▶
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cookie;
