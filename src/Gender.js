import { useCallback, useState } from "react";
import styles from "./MainUI.module.css"
import { useNavigate, useLocation } from "react-router-dom";
import React from "react";

const Gender = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const selectedAge = location.state.selectedAge;
  const selectedJob = location.state.selectedJob;
  const genreObject = location.state.genreObject;

  const [selectedGender, setSelectedGender] = useState("");
  const handleJobSelectChangeGender = (event) => {
    setSelectedGender(event.target.value);
  };

  const onArrowRightOutlinedIconClickGender = useCallback(() => {
    navigate("/Cookie", { state: { selectedAge, selectedJob, genreObject, selectedGender } });
    console.log(selectedAge, selectedJob, genreObject, selectedGender);
  }, [navigate, selectedAge, selectedJob, genreObject, selectedGender]);

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
          > 성별을 선택해주세요
          </div>
          <label htmlFor="GenderSelect">
            <select
              id="GenderSelect"
              onChange={(e) => handleJobSelectChangeGender(e)}
              value={selectedGender}
              style={{
                width: "80%", height: "17%", marginLeft: "25px", fontSize: "160%", fontWeight: 500, borderStyle: "groove", opacity: "1",
                zIndex: "1",
              }} size={2}
            >
              <option value="0">&nbsp;※ 아래에서 선택하세요</option>
              <option style={{ marginBottom: "30px" }} value='M'>&nbsp;1.남성(male)</option>
              <option style={{ marginBottom: "1px" }} value='F'>&nbsp;2.여성(female)</option>

            </select>
          </label>
          <p style={{ fontSize: "13px", marginLeft: "28px", marginRight: "60px", color: 'rgba(43, 109, 150, 0.9)' }}>(선택된 성별 코드: {selectedGender})
          </p>
          <div style={{
            marginTop: "40vh", fontSize: "180%", marginLeft: "55%", fontWeight: "800", fontFamily: "Helvetica, sans-serif", color: selectedAge !== "0" && selectedAge !== 0 ? "rgba(43, 109, 150, 0.9)" : "rgba(169, 169, 169, 0.5)",
            cursor: selectedAge !== "0" && selectedAge !== 0 ? "pointer" : "default",
          }}
            onClick={onArrowRightOutlinedIconClickGender}>Next ▶</div>
        </div></div>
    </div>
  );
};

export default Gender;
