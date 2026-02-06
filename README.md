🚀 API Dashboard

A dynamic JavaScript dashboard featuring 8 mini applications powered by real-world public APIs.
Each section fetches live data asynchronously and updates the DOM dynamically.

🌐 Live Features

This project includes:

🐶 Random Dog Image (Dog API)

🐱 Random Cat Image (Cat API)

🌤️ Dallas Weather (Open-Meteo API)

💱 USD → EUR Exchange Rate (ExchangeRate API)

🧑‍💻 GitHub User Profile (GitHub API)

😂 Random Joke (JokeAPI)

🎬 Trending Movies (TMDB API)

💡 Random Advice (Advice Slip API)

🧠 Technologies Used

HTML5

CSS3 (Grid, Flexbox, Animations)

JavaScript (ES6+)

Async/Await

Fetch API

DOM Manipulation

⚙️ How It Works

Each dashboard section is built as an independent asynchronous function:

Fetch data from a public API

Convert response to JSON

Extract necessary properties

Dynamically render content using template literals

Handle errors using try/catch

The Movies section is displayed as a horizontally scrollable row, styled to resemble a streaming platform interface.

📂 Project Structure
api-dashboard/
│
├── index.html
├── style.css
└── script.js

🔐 API Keys

This project uses the TMDB API for trending movies.

⚠️ Note: In a production environment, API keys should be stored securely using environment variables or a backend server. For demonstration purposes, the key is included in the frontend code.

🎨 UI Highlights

Dark gradient background

Glassmorphism cards

Hover animations

Horizontal scrolling movie row

Staggered “product launch” entrance animations

Responsive layout for smaller screens

🎥 Project Presentation

A short 5-minute presentation video demonstrating the functionality and explaining the implementation is included in the submission.

📌 Learning Objectives Achieved

Asynchronous JavaScript with async/await

Handling multiple API response structures

Working with arrays and nested objects

DOM manipulation

Error handling

Responsive design principles

✨ Author

Ana Aziz Hemani