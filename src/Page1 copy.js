import { useCallback } from "react";
import styles from "./Global.page.css"
import { useNavigate } from "react-router-dom";
import React, { useState } from 'react';

const Page1Copy = () => {

  const navigate = useNavigate();

  const [clicked13, setClicked13] = useState(true);
  function onClickHandler13() {
    setClicked13(clicked13 ? false : true);
  }

  const [clicked14, setClicked14] = useState(true);
  function onClickHandler14() {
    setClicked14(clicked14 ? false : true);
  }

  const [clicked15, setClicked15] = useState(true);
  function onClickHandler15() {
    setClicked15(clicked15 ? false : true);
  }

  const [clicked16, setClicked16] = useState(true);
  function onClickHandler16() {
    setClicked16(clicked16 ? false : true);
  }


  const [clicked17, setClicked17] = useState(true);
  function onClickHandler17() {
    setClicked17(clicked17 ? false : true);
  }

  const [clicked18, setClicked18] = useState(true);
  function onClickHandler18() {
    setClicked18(clicked18 ? false : true);
  }

  const valueCopy = [clicked13, clicked14, clicked15, clicked16, clicked17, clicked18]

  const onArrowRightOutlinedIconClick2 = useCallback(() => {
    navigate("/2");
    console.log(valueCopy);
  }, [navigate, valueCopy]);

  return (<div className={styles.page1}>
    <img className={styles.page1Child} alt="" src="./back.png" />
    <img
      className={styles.page1Item}
      alt=""
    />
    <b className={styles.b}>
      <p className={styles.p}>질문 1.</p>
      <p className={styles.p1}>
        당신이 좋아하는 영화 장르를 저에게 모두 알려주세요
      </p>
    </b>
    <b className={styles.b1}>질문 1</b>
    <div className={styles.component1}>
      <div
        className={`${clicked13
          ? styles.component1Child
          : styles.component101Child}`}
        onClick={() => onClickHandler13()}
        alt=""
      />
      <div className={styles.component9Item} />
      <b className={styles.b2}>{`미스터리                `}</b>
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
      <b className={styles.b2}>{`로맨스                `}</b>
    </div>
    <div className={styles.component3}>
      <div
        className={`${clicked15
          ? styles.component3Child
          : styles.component301Child}`}
        onClick={() => onClickHandler15()}
        alt=""
      />
      <div className={styles.component9Item} />
      <b className={styles.b2}>{`공상과학                `}</b>
    </div>
    <div className={styles.component4}>
      <div
        className={`${clicked16
          ? styles.component4Child
          : styles.component401Child}`}
        onClick={() => onClickHandler16()}
        alt=""
      />
      <div className={styles.component9Item} />
      <b className={styles.b2}>{`스릴러                `}</b>
    </div>
    <div className={styles.component5}>
      <div
        className={`${clicked17
          ? styles.component5Child
          : styles.component501Child}`}
        onClick={() => onClickHandler17()}
        alt=""
      />
      <div className={styles.component9Item} />
      <b className={styles.b2}>{`전쟁영화                `}</b>
    </div>
    <div className={styles.component6}>
      <div
        className={`${clicked18
          ? styles.component6Child
          : styles.component601Child}`}
        onClick={() => onClickHandler18()}
        alt=""
      />
      <div className={styles.component9Item} />
      <b className={styles.b2}>{`서부극                `}</b>
    </div>
    <div className={styles.component9Item} /><div>
      <img
        className={styles.arrowrightoutlinedIcon}
        alt=""
        src="/arrowrightoutlined.png"
        onClick={onArrowRightOutlinedIconClick2}
      />
      <b className={styles.next}>Next?</b></div>
  </div>
  );
};

export default Page1Copy;
