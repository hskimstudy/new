import { useCallback } from "react";
import styles from "./page1.module.css";
import { useNavigate } from "react-router-dom";
import React, { useState } from 'react';

const Page1 = () => {

  const navigate = useNavigate();

  const [state, setState] = useState({
    age: ""
  });

  const handleChangeState = (e) => {
    setState({
      [e.target.name]: e.target.value,
    });
  };

  const value3 = [state.age]

  const onArrowRightOutlinedIconClick4 = useCallback(() => {
    navigate("/Cookie");
    console.log(value3);
  }, [navigate, value3]);

  return (<div className={styles.page1}>
    <img className={styles.page1Child} alt="" src="./back.png" />
    <img
      className={styles.page1Item}
      alt=""
    />
    <b className={styles.b}>
      <p className={styles.p}>질문 2.</p>
      <p className={styles.p1}>
        마지막 질문! 당신의 '만 나이'를 입력해주세요
      </p>
    </b>
    <div className={styles.component1}>

      <div className={styles.component9Item} />
      <input className={styles.b2} placeholder="예: 24" value={state.age} name='age'
        onChange={handleChangeState}></input>
    </div>
    <div></div>
    <div className={styles.component9Item} /><div>
      <img
        className={styles.arrowrightoutlinedIcon}
        alt=""
        src="/arrowrightoutlined.png"
        onClick={onArrowRightOutlinedIconClick4}
      />
      <b className={styles.next}>Next?</b></div>
  </div>
  );
};

export default Page1;
