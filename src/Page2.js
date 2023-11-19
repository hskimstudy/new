import { useCallback } from "react";
import styles from "./page1.module.css";
import { useNavigate } from "react-router-dom";
import React, { useState } from 'react';

const Page1 = () => {

  const navigate = useNavigate();

  const [clicked13, setClicked13] = useState(true);
  function onClickHandler13() {
    setClicked13(clicked13 ? false : true);
  }

  const [clicked14, setClicked14] = useState(true);
  function onClickHandler14() {
    setClicked14(clicked14 ? false : true);
  }


  const value2 = [clicked13, clicked14]

  const onArrowRightOutlinedIconClick3 = useCallback(() => {
    navigate("/3");
    console.log(value2);
  }, [navigate, value2]);

  return (<div className={styles.page1}>
    <img className={styles.page1Child} alt="" src="./back.png" />
    <img
      className={styles.page1Item}
      alt=""
    />
    <b className={styles.b}>
      <p className={styles.p}>질문 2.</p>
      <p className={styles.p1}>
        정확한 추천을 위해 당신의 성별을 알려줄 수 있나요?
      </p>
    </b>
    <div className={styles.component1}>
      <div
        className={`${clicked13
          ? styles.component1Child
          : styles.component101Child}`}
        onClick={() => onClickHandler13()}
        alt=""
      />
      <div className={styles.component9Item} />
      <b className={styles.b2}>{`남성                `}</b>
    </div>
    <div></div>
    <div className={styles.component2}>
      <div
        className={`${clicked14
          ? styles.component2Child
          : styles.component201Child}`}
        onClick={() => onClickHandler14()}
        alt=""
      />
      <div className={styles.component9Item} />
      <b className={styles.b2}>{`여성                `}</b>
    </div>

    <div className={styles.component9Item} /><div>
      <img
        className={styles.arrowrightoutlinedIcon}
        alt=""
        src="/arrowrightoutlined.png"
        onClick={onArrowRightOutlinedIconClick3}
      />
      <b className={styles.next}>Next?</b></div>
  </div>
  );
};

export default Page1;
