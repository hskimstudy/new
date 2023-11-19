import { useCallback, useEffect, useState } from "react";
import styles from "./MainUI.module.css";
import { useLocation, useNavigate } from "react-router-dom";
import React from "react";
import axios from "axios";
import "font-awesome/css/font-awesome.min.css";


class UserInput {
  constructor(selectedAge, selectedJob, genreObject, selectedGender) {
    this.age = selectedAge || 0;
    this.occupation = selectedJob || 0;
    this.genres = genreObject || {};
    this.gender = selectedGender || "";
  }
}



const Result = () => {
  const location = useLocation();
  const selectedAge = location.state.selectedAge;
  const selectedJob = location.state.selectedJob;
  const genreObject = location.state.genreObject;
  const selectedGender = location.state.selectedGender;

  const navigate = useNavigate();
  const [movieRecommendations, setMovieRecommendations] = useState([]);
  const [recommendExplanationShapValue, setRecommendExplanationShapValue] = useState([]);
  const [recommendExplanationP, setRecommendExplanationP] = useState([]);
  const [recommendExplanationN, setRecommendExplanationN] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {

        const userInput = new UserInput(
          selectedAge,
          selectedJob,
          genreObject,
          selectedGender
        );

        console.log(userInput);
        const response = await axios.post("http://127.0.0.1:8000/predict/", userInput);


        setMovieRecommendations(response.data.recommended_movies);
        setRecommendExplanationShapValue(response.data.shap_values);
        setRecommendExplanationP(response.data.shap_values_positive);
        setRecommendExplanationN(response.data.shap_values_negative);
        console.log(recommendExplanationShapValue)
        console.log(recommendExplanationP)
        console.log(recommendExplanationN)

        setLoading(false);
      } catch (error) {
        console.error("Error fetching data: ", error);
        const fakeData = [
          { title: "자료형 에러(Type Error)" },
          { title: ": 연구진에게 문의하세요!" }
        ];
        setMovieRecommendations(fakeData);
        setLoading(false);
      }
    };

    fetchData();
  }, ["http://127.0.0.1:8000/predict/", selectedAge, selectedJob, genreObject, selectedGender]);

  const onArrowRightOutlinedIconClickResult = useCallback(() => {
    navigate("/ExplainResult0", {
      state: {
        recommendExplanationP: recommendExplanationP,
        recommendExplanationN: recommendExplanationN
      },
    });
  }, [navigate, recommendExplanationP, recommendExplanationN]);


  return (
    <div className={styles.home}>
      <div className={styles.homeChild}>
        <img className={styles.homeChild} src="./back.png" alt="Back" />
        <div className={styles.homeChild}>
          <div
            style={{
              marginTop: "10%",
              fontWeight: "bold",
              textAlign: "left",
              marginLeft: "28px",
              fontSize: "135%",
              marginBottom: "7%",
              marginRight: "25px",
              color: "rgba(43, 109, 150, 0.9)",
            }}
          >
            추천 영화 목록 :
          </div>
          <div>
            <ul>
              {loading ? (
                <li key="loading" style={{ listStyleType: "none" }}>
                  <i
                    className="fa fa-spinner fa-spin"
                    style={{ fontSize: "35px", color: "blue" }}
                  />
                  <span style={{ margin: "5px", marginTop: "30px", width: "350px", height: "50px" }}>
                    {" "}
                    로딩 중...
                  </span>
                </li>
              ) : (
                movieRecommendations.map((movie) => (
                  <li style={{
                    padding: '5px 2px 7px 5px',
                    marginBottom: '5%',
                    borderBottom: '1px solid #efefef',
                    fontSize: '19px',
                    listStyle: 'none',
                    verticalAlign: 'middle'
                  }} key={movie.title}>
                    < strong > {movie.title}</strong>
                  </li>
                ))
              )}
            </ul>
          </div>
          <div
            style={{
              marginTop: "20vh",
              fontSize: "180%",
              marginLeft: "55%",
              fontWeight: "800",
              fontFamily: "Helvetica, sans-serif",
              color: "rgba(43, 109, 150, 0.9)",
            }}
            onClick={onArrowRightOutlinedIconClickResult}
          >
            Next ▶
          </div>
        </div>
      </div >
    </div >
  );
};

export default Result;
