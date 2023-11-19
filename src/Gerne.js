import { useCallback, useState } from "react";
import styles from "./MainUI.module.css";
import { useNavigate, useLocation } from "react-router-dom";
import React from "react";

const Genre = () => {
  const [selectedGenres, setSelectedGenres] = useState({ 0: 0 });
  const navigate = useNavigate();
  const location = useLocation();

  const selectedAge = location.state.selectedAge;
  const selectedJob = location.state.selectedJob;

  const handleGenreSelectChange = (event) => {
    const genreValue = event.target.value;
    setSelectedGenres((prevGenres) => ({
      ...prevGenres,
      [genreValue]: prevGenres[genreValue] ? 0 : 1,
    }));
  };

  const onArrowRightClick = useCallback(() => {
    const genreObject = {};
    genres.forEach((genre) => {
      genreObject[genre.value] = selectedGenres[genre.value] || 0;
    });

    navigate("/Gender", { state: { selectedAge, selectedJob, genreObject } });
  }, [navigate, selectedAge, selectedJob, selectedGenres]);

  const genres = [
    { value: 'Action', title: '1. 액션' },
    { value: 'Adventure', title: '2. 모험' },
    { value: 'Animation', title: '3. 애니메이션' },
    { value: "Children's", title: '4. 아동영화' },
    { value: 'Comedy', title: '5. 코메디' },
    { value: 'Crime', title: '6. 범죄영화' },
    { value: 'Documentary', title: '7. 다큐멘터리' },
    { value: 'Drama', title: '8. 드라마극' },
    { value: 'Fantasy', title: '9. 판타지' },
    { value: 'Film-Noir', title: '10. 누아르' },
    { value: 'Horror', title: '11. 호러' },
    { value: 'Musical', title: '12. 뮤지컬' },
    { value: 'Mystery', title: '13. 모험' },
    { value: 'Romance', title: '14. 애니메이션' },
    { value: 'Sci-Fi', title: '15. 공상과학' },
    { value: 'Thriller', title: '16. 스릴러' },
    { value: 'War', title: '17. 전쟁영화' },
    { value: 'Western', title: '18. 서부극' },
  ];

  const selectedGenreTitles = genres
    .filter((genre) => selectedGenres[genre.value] === 1)
    .map((genre) => genre.title)
    .join(", ");

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
              fontSize: "125%",
              marginBottom: "1%",
              marginRight: "25px",
            }}
          >
            좋아하는 장르를 선택해주세요
          </div>
          <div
            style={{
              marginTop: "1%",
              fontWeight: "bold",
              textAlign: "left",
              marginLeft: "28px",
              fontSize: "85%",
              marginBottom: "7%",
              marginRight: "25px",
              color: "rgba(43, 109, 150, 0.9)",
            }}
          >
            (Tip. 여러 장르를 선택할 수 있어요) </div>
          <label htmlFor="GenreSelect"></label>
          <select
            multiple
            id="GenreSelect"
            onChange={(e) => handleGenreSelectChange(e)}
            value={genres.filter((genre) => selectedGenres[genre.value] === 1).map((genre) => genre.value)}
            style={{
              width: "80%",
              height: "50%",
              marginLeft: "25px",
              fontSize: "160%",
              fontWeight: 500,
              borderStyle: "groove",
            }}
            size={18}
          >
            <option value="0">&nbsp;※ 터치 후 선택</option>
            {genres.map((genre, index) => (
              <option key={index} value={genre.value}>
                {genre.title}
              </option>
            ))}
          </select>
          <p style={{ fontSize: "13px", marginLeft: "28px", marginRight: "60px" }}>
            (선택된 영화 코드: {selectedGenreTitles})
          </p>
          <div
            style={{
              marginTop: "8vh",
              fontSize: "180%",
              marginLeft: "55%",
              fontWeight: "800",
              fontFamily: "Helvetica, sans-serif",
              color: Object.values(selectedGenres).some(value => value === 1) ? "rgba(43, 109, 150, 0.9)" : "rgba(169, 169, 169, 0.5)",
              cursor: Object.values(selectedGenres).some(value => value === 1) ? "pointer" : "default",
            }}
            onClick={onArrowRightClick}
          >
            Next ▶
          </div>
        </div>
      </div>
    </div>
  );
};

export default Genre;
