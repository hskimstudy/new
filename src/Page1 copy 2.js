import { useCallback } from "react";
import styles from "./page1.module.css";
import { useNavigate } from "react-router-dom";
import React, { useState } from 'react';

const Page1 = () => {

  const navigate = useNavigate();

  const [clicked, setClicked] = useState(true);
  function onClickHandler() {
    setClicked(clicked ? false : true);
  }

  const [clicked2, setClicked2] = useState(true);
  function onClickHandler2() {
    setClicked2(clicked2 ? false : true);
  }

  const [clicked3, setClicked3] = useState(true);
  function onClickHandler3() {
    setClicked3(clicked3 ? false : true);
  }


  const [clicked4, setClicked4] = useState(true);
  function onClickHandler4() {
    setClicked4(clicked4 ? false : true);
  }


  const [clicked5, setClicked5] = useState(true);
  function onClickHandler5() {
    setClicked5(clicked5 ? false : true);
  }

  const [clicked6, setClicked6] = useState(true);
  function onClickHandler6() {
    setClicked6(clicked6 ? false : true);
  }

  const [clicked7, setClicked7] = useState(true);
  function onClickHandler7() {
    setClicked7(clicked7 ? false : true);
  }

  const [clicked8, setClicked8] = useState(true);
  function onClickHandler8() {
    setClicked8(clicked8 ? false : true);
  }
  const [clicked9, setClicked9] = useState(true);
  function onClickHandler9() {
    setClicked9(clicked9 ? false : true);
  }

  const [clicked10, setClicked10] = useState(true);
  function onClickHandler10() {
    setClicked10(clicked10 ? false : true);
    console.log(clicked10);
  }

  const [clicked11, setClicked11] = useState(true);
  function onClickHandler11() {
    setClicked11(clicked11 ? false : true);
  }

  const [clicked12, setClicked12] = useState(true);
  function onClickHandler12() {
    setClicked12(clicked12 ? false : true);
  }


  const value = [clicked, clicked2, clicked3, clicked4, clicked5, clicked6, clicked7, clicked8, clicked9, clicked10, clicked11, clicked12]

  const onArrowRightOutlinedIconClick2 = useCallback(() => {
    navigate("/2");
    console.log(value);
  }, [navigate, value]);

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
        className={`${clicked
          ? styles.component1Child
          : styles.component101Child}`}
        onClick={() => onClickHandler()}
        alt=""
      />
      <div className={styles.component9Item} />
      <b className={styles.b2}>{`액션                `}</b>
    </div>
    <div></div>
    <div className={styles.component2}>
      <div
        className={`${clicked2
          ? styles.component2Child
          : styles.component201Child}`}
        onClick={() => onClickHandler2()}
        alt=""
      />
      <div className={styles.component9Item} />
      <b className={styles.b2}>{`모험                `}</b>
    </div>
    <div className={styles.component3}>
      <div
        className={`${clicked3
          ? styles.component3Child
          : styles.component301Child}`}
        onClick={() => onClickHandler3()}
        alt=""
      />
      <div className={styles.component9Item} />
      <b className={styles.b2}>{`애니메이션                `}</b>
    </div>
    <div className={styles.component4}>
      <div
        className={`${clicked4
          ? styles.component4Child
          : styles.component401Child}`}
        onClick={() => onClickHandler4()}
        alt=""
      />
      <div className={styles.component9Item} />
      <b className={styles.b2}>{`아동영화                `}</b>
    </div>
    <div className={styles.component5}>
      <div
        className={`${clicked5
          ? styles.component5Child
          : styles.component501Child}`}
        onClick={() => onClickHandler5()}
        alt=""
      />
      <div className={styles.component9Item} />
      <b className={styles.b2}>{`코메디                `}</b>
    </div>
    <div className={styles.component6}>
      <div
        className={`${clicked6
          ? styles.component6Child
          : styles.component601Child}`}
        onClick={() => onClickHandler6()}
        alt=""
      />
      <div className={styles.component9Item} />
      <b className={styles.b2}>{`범죄영화                `}</b>
    </div>
    <div className={styles.component7}>
      <div
        className={`${clicked7
          ? styles.component7Child
          : styles.component701Child}`}
        onClick={() => onClickHandler7()}
        alt=""
      />
      <div className={styles.component9Item} />
      <b className={styles.b2}>{`다큐멘터리                `}</b>
    </div>
    <div className={styles.component8}>
      <div
        className={`${clicked8
          ? styles.component8Child
          : styles.component801Child}`}
        onClick={() => onClickHandler8()}
        alt=""
      />
      <div className={styles.component9Item} />
      <b className={styles.b2}>{`드라마                `}</b>
    </div>
    <div className={styles.component9}>
      <div
        className={`${clicked9
          ? styles.component9Child
          : styles.component901Child}`}
        onClick={() => onClickHandler9()}
        alt=""
      />
      <div className={styles.component9Item} />
      <b className={styles.b2}>{`판타지                `}</b>
    </div>
    <div className={styles.component10}>
      <div
        className={`${clicked10
          ? styles.component10Child
          : styles.component1001Child}`}
        onClick={() => onClickHandler10()}
        alt=""
      />
      <div className={styles.component9Item} />
      <b className={styles.b2}>{`누아르                `}</b>
    </div>
    <div className={styles.component11}>
      <div
        className={`${clicked11
          ? styles.component11Child
          : styles.component1101Child}`}
        onClick={() => onClickHandler11()}
        alt=""
      />
      <div className={styles.component9Item} />
      <b className={styles.b2}>{`호러영화                `}</b>
    </div>
    <div className={styles.component12}>
      <div
        className={`${clicked12
          ? styles.component12Child
          : styles.component1201Child}`}
        onClick={() => onClickHandler12()}
        alt=""
      />
      <div className={styles.component9Item} />
      <b className={styles.b2}>{`뮤지컬                `}</b>
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

export default Page1;
