import { useCallback } from "react";
import styles from "./page5.module.css";
import { useNavigate } from "react-router-dom";

const Page8 = () => {
  const navigate = useNavigate();

  const onArrowRightOutlinedIconClick8 = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={styles.page1} >
      <img className={styles.page1Child} alt="" src="./back.png" />
      <div className={styles.component1} style={{ marginLeft: '0px', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', height: '100%' }}>
        <button style={{ width: '310px', height: '80px', backgroundColor: 'lightblue', marginBottom: '10px', marginTop: '0px', listStyleType: 'none', textDecorationLine: 'underline', alignSelf: 'center' }} className={styles.featureName}>하나의 Task가 끝났습니다.  설문에 응답해주세요.</button>
      </div>
      <div></div>
      <div className={styles.component9Item} />
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <img
          className={styles.arrowrightoutlinedIcon}
          alt=""
          src="/arrowrightoutlined.png"
          onClick={onArrowRightOutlinedIconClick8}
        />
        <b className={styles.next}>나가기</b>
      </div>
    </div>
  );
}

export default Page8;
