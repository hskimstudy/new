import { useCallback, useState } from "react";
import styles from "./MainUI.module.css"
import { useNavigate, useLocation } from "react-router-dom";
import React from "react";

const Occupation = () => {

  const navigate = useNavigate();

  const location = useLocation();
  const selectedAge = location.state.selectedAge;

  const [selectedJob, setSelectedJob] = useState(0);

  const handleSelectChangeJob = (event) => {
    setSelectedJob(event.target.value);
  };

  const onArrowRightOutlinedIconClickJob = useCallback(() => {
    navigate("/Gerne", { state: { selectedAge, selectedJob } });
    console.log(selectedAge, selectedJob);
  }, [navigate, selectedAge, selectedJob]);

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
          >직업을 선택해주세요
          </div>
          <label htmlFor="jobSelect" ></label>
          <select
            id="jobSelect"
            onChange={(e) => handleSelectChangeJob(e)}
            value={selectedJob}
            style={{
              width: "80%", height: "25%", marginLeft: "25px", fontSize: "140%", fontWeight: 500, borderStyle: "groove", 
            }} size={18}
          >
            <option value="0">&nbsp;※ 터치 후 선택</option>
            <option value="1"> 1. 학자/교육자</option>
            <option value="2">2. 예술가</option>
            <option value="3">3. 사무직</option>
            <option value="4">4. 대학생/대학원생</option>
            <option value="5">5. 고객 서비스직</option>
            <option value="6">6. 의료/의료인접직군</option>
            <option value="7">7. 임원/관리직</option>
            <option value="8">8. 농부</option>
            <option value="9">9. 주부</option>
            <option value="10">10. 중고교 학생</option>
            <option value="11">11. 변호사/법조인접직</option>
            <option value="12">12. 프로그래머</option>
            <option value="13">13. 은퇴자</option>
            <option value="14">14. 영업/마케팅 직군</option>
            <option value="15">15. 자영업</option>
            <option value="17">16. 기술직/엔지니어</option>
            <option value="18">17. 장인/소상공인</option>
            <option value="19">18. 취업 준비/실직</option>
            <option value="20">19. 작가/방송작가</option>
          </select>

          <p style={{ fontSize: "13px", marginLeft: "28px", marginRight: "60px", color: 'rgba(43, 109, 150, 0.9)' }}>(선택된 직업 코드: {selectedJob})
          </p>
          <div style={{
            marginTop: "8vh", fontSize: "180%", marginLeft: "55%", fontWeight: "800", fontFamily: "Helvetica, sans-serif", color: selectedJob !== "0" && selectedJob !== 0 ? "rgba(43, 109, 150, 0.9)" : "rgba(169, 169, 169, 0.5)",
            cursor: selectedJob !== "0" && selectedJob !== 0 ? "pointer" : "default",
          }}
            onClick={onArrowRightOutlinedIconClickJob}>Next ▶</div>
        </div></div>

    </div>

  );
};

export default Occupation;
