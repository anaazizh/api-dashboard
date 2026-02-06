async function getDog() {
  try {
    const res = await fetch("https://dog.ceo/api/breeds/image/random");
    const data = await res.json();

    document.getElementById("dog").innerHTML = `
        <h2>Random Dog</h2>
        <img src="${data.message}" width="100%">
        <button onclick="getDog()">New Dog</button>
    `;

  } catch (error) {
    document.getElementById("dog").innerHTML = `<p>Failed to load dog.</p>`;
  }
}

getDog();

async function getCat() {
  try {
    const res = await fetch("https://api.thecatapi.com/v1/images/search");
    const data = await res.json();

    document.getElementById("cat").innerHTML = `
      <h2>Random Cat</h2>
      <img src="${data[0].url}" width="100%">
      <button onclick="getCat()">New Cat</button>
    `;
  } catch (error) {
    document.getElementById("cat").innerHTML = `<p>Failed to load cat.</p>`;
  }
}
getCat();

async function getWeather() {
  try {
    const res = await fetch(
      "https://api.open-meteo.com/v1/forecast?latitude=32.7767&longitude=-96.7970&current_weather=true"
    );
    const data = await res.json();

    document.getElementById("weather").innerHTML = `
      <h2>DAL Weather</h2>
      <p>Temperature: ${data.current_weather.temperature}°C</p>
    `;
  } catch (error) {
    document.getElementById("weather").innerHTML = `<p>Failed to load weather.</p>`;
  }
}

getWeather();

async function getCurrency() {
  try {
    const res = await fetch("https://open.er-api.com/v6/latest/USD");
    if (!res.ok) throw new Error("Currency request failed");

    const data = await res.json();

    document.getElementById("currency").innerHTML = `
      <h2>USD → EUR</h2>
      <p>Rate: ${data.rates.EUR}</p>
      <button onclick="getCurrency()">Refresh Rate</button>
    `;
  } catch (error) {
    console.error(error);
    document.getElementById("currency").innerHTML =
      "<h2>USD → EUR</h2><p>Failed to load currency.</p>";
  }
}

getCurrency();

async function getJoke() {
    try {
  const res = await fetch("https://v2.jokeapi.dev/joke/Any?type=single");
  const data = await res.json();

  document.getElementById("joke").innerHTML = `
    <h2>Random Joke</h2>
    <p>${data.joke}</p>
    <button onclick="getJoke()">New Joke</button>
  `;
    } catch (error) {
    document.getElementById("joke").innerHTML = '<p>Failed to load joke.</p>';
        }
    }

getJoke();

async function getGitHub() {
  try {
    const res = await fetch("https://api.github.com/users/anaazizh");
    if (!res.ok) throw new Error("GitHub request failed");

    const data = await res.json();

    document.getElementById("github").innerHTML = `
      <h2>GitHub User</h2>
      <img src="${data.avatar_url}" width="80">
      <p>${data.name ?? data.login}</p>
      <p>Followers: ${data.followers}</p>
      <a href="${data.html_url}" target="_blank">View Profile</a>
    `;
  } catch (error) {
    document.getElementById("github").innerHTML = `<p>Failed to load GitHub user.</p>`;
  }
}

getGitHub();

const TMDB_KEY = "4847397f44cf34eab65b00ec8729ab8a";

async function getTrendingMovies() {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/trending/movie/day?api_key=${TMDB_KEY}`
    );

    if (!response.ok) throw new Error("TMDB request failed");

    const data = await response.json();
    const movies = data.results.slice(0, 5);

    document.getElementById("movies").innerHTML = `
      <h2>Trending Movies</h2>
        <button onclick="getTrendingMovies()">Refresh Movies</button>
      <div class="movie-list">
        ${movies
          .map((movie) => {
            const posterHtml = movie.poster_path
              ? `<img src="https://image.tmdb.org/t/p/w200${movie.poster_path}" alt="${movie.title}" />`
              : `<div class="poster-placeholder">No poster</div>`;

            return `
              <div class="movie">
                ${posterHtml}
                <p>${movie.title}</p>
              </div>
            `;
          })
          .join("")}
      </div>
    `;
  } catch (error) {
    console.error("Error fetching movies:", error);
    document.getElementById("movies").innerHTML = `
      <h2>Trending Movies</h2>
      <p>Failed to load movies.</p>
    `;
  }
}

getTrendingMovies();

async function getAdvice() {
  try {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();

    document.getElementById("custom").innerHTML = `
      <h2>Advice</h2>
      <p>"${data.slip.advice}"</p>
      <button onclick="getAdvice()">New Advice</button>
    `;
  } catch (err) {
    document.getElementById("custom").innerHTML = `<h2>Advice</h2><p>Failed to load.</p>`;
  }
}

getAdvice();
