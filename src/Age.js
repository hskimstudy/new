import { useCallback } from "react";
import styles from "./MainUI.module.css"
import { useNavigate } from "react-router-dom";
import React from "react";
import { useState } from 'react';

const Age = () => {
  const navigate = useNavigate();

  const [selectedAge, setSelectedAge] = useState(0);
  const handleJobSelectChangeAge = (event) => {
    setSelectedAge(event.target.value);
  };

  const onArrowRightOutlinedIconClickAge = useCallback(() => {
    if (selectedAge !== "0" && selectedAge !== 0) {
      // 선택된 경우에만 다음 페이지로 이동
      navigate("/Occupation", { state: { selectedAge } });
    }
  }, [selectedAge, navigate]);



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
              fontSize: "125%",
              marginBottom: "7%",
              marginRight: "25px",
              color: 'rgba(43, 109, 150, 0.9)'
            }}
          > 나이를 선택해주세요
          </div>
          <label htmlFor="AgeSelect"></label>
          <select
            id="AgeSelect"
            onChange={(e) => handleJobSelectChangeAge(e)}
            value={selectedAge}
            style={{
              width: "80%", height: "25%", marginLeft: "25px", fontSize: "140%", fontWeight: 500, borderStyle: "groove", 
            }} size={7}
          >
            <option value="0">&nbsp;※ 터치 후 선택</option>
            <option value="1">&nbsp;1. 만 18세 미만 </option>
            <option value="18">&nbsp;2. 만 18세 - 24세 </option>
            <option value="25">&nbsp;3. 만 25세 - 34세 </option>
            <option value="35">&nbsp;4. 만 35세 - 44세 </option>
            <option value="45">&nbsp;5. 만 44세 - 49세 </option>
            <option value="50">&nbsp;6. 만 50세 - 55세 </option>
            <option value="56">&nbsp;7. 만 56세 이상 </option>
          </select>
          <p style={{ fontSize: "13px", marginLeft: "28px", marginRight: "60px", color: 'rgba(43, 109, 150, 0.9)' }}>(선택된 나이 코드: {selectedAge})
          </p>
          <div style={{
            marginTop: "8vh", fontSize: "180%", marginLeft: "55%", fontWeight: "800", fontFamily: "Helvetica, sans-serif", color: selectedAge !== "0" && selectedAge !== 0 ? "rgba(43, 109, 150, 0.9)" : "rgba(169, 169, 169, 0.5)",
            cursor: selectedAge !== "0" && selectedAge !== 0 ? "pointer" : "default",
          }}
            onClick={onArrowRightOutlinedIconClickAge}>Next ▶</div>
        </div></div>
    </div>
  );
};

export default Age;
