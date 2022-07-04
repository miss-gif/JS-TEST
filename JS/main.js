import axios from "axios"; // 패키지의 도움을 받아

function fetchMovies() {
  axios.get("https://www.omdbapi.com/?apikey=7035c60c&s=frozen").then((res) => {
    console.log(res); // get 사용자를 인증하고 데이터를 요청
    // then 콜백
    const h1El = document.querySelector("h1");
    const imgEl = document.querySelector("img");
    h1El.textContent = res.data.Search[0].Title;
    imgEl.src = res.data.Search[0].Poster;
  });
}

fetchMovies();
