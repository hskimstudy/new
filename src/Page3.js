import { useCallback, useEffect, useState } from "react";
import styles from "./page1.module.css";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Page3 = () => {
  const navigate = useNavigate("");
  const [selectedJob2, setSelectedJob2] = useState("");
  const handleJobSelectChange4 = (event) => {
    setSelectedJob2(event.target.value);
  };
  const location = useLocation("");
  const selectedJob = location.state.selectedJob;

  useEffect(() => {
    console.log("selectedJob from location:", selectedJob);
  }, [selectedJob]);

  useEffect(() => {
    console.log("selectedJob2:", selectedJob2);
  }, [selectedJob2]);

  const onArrowRightOutlinedIconClick3 = useCallback(() => {
    navigate("/3");
  }, [navigate, selectedJob2]);

  return (
    <div className={styles.page1}>
      <img className={styles.back} src="./back.png" />
      <div className={styles.dropdown}>
        <div style={{ marginBottom: "12px", marginTop: "30px", fontWeight: "bold" }}>나이를 선택해주세요</div>

        <label htmlFor="jobSelect"></label>
        <select id="jobSelect" onChange={handleJobSelectChange4} value={selectedJob2} size={18} style={{ width: "250px", height: "140px" }}>
          <option value="1"> 1. 만 18세 미만 (연령 범주: 1~) </option>
          <option value="18"> 2. 만 18세 - 24세 (연령 범주: 18~) </option>
          <option value="25"> 3. 만 25세 - 34세 (연령 범주: 25~) </option>
          <option value="35"> 4. 만 35세 - 44세 (연령 범주: 35~)</option>
          <option value="45"> 5. 만 44세 - 49세 (연령 범주: 45~)</option>
          <option value="50"> 6. 만 50세 - 55세 (연령 범주: 50~)</option>
          <option value="56"> 7. 만 56세 이상 (연령 범주: 56~)</option>
        </select>

        <p style={{ fontSize: "13px" }}> (선택된 연령 범주: {selectedJob2}~)</p>
      </div>
      <img
        className={styles.arrowrightoutlinedIcon}
        alt=""
        src="/arrowrightoutlined.png"
        onClick={onArrowRightOutlinedIconClick3}
      />
      <b className={styles.next}>Next?</b></div>
  );
};

export default Page3;
