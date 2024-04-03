# Netflix Clone Project

Welcome to the GitHub repository for my React-based Netflix clone project! This project is a front-end web application that mimics the core features of Netflix, utilizing the TMDB (The Movie Database) API for dynamic, real-time movie and TV show data. It's designed to showcase my abilities in React development, API integration, and responsive web design, built as part of a school assignment.

## 🚀 Features

This Netflix clone includes several key features:

- **Dynamic Data Loading**: Fetch and display movies and TV shows from TMDB API based on different categories and providers.
- **Search Functionality**: Users can search for TV shows using TMDB's search API.
- **Responsive Design**: The layout adjusts for a variety of screen sizes, ensuring a seamless experience on desktops, tablets, and mobile devices.
- **TV Show Details**: Click on a show's poster to view its detailed page, including descriptions, ratings, and backdrop images.
- **Watchlist Management**: Users can add shows to their watchlist, which is stored in localStorage for persistence across sessions.
- **Provider-based Grouping**: Main page displays top TV shows grouped by providers like Netflix, Crave, Disney, and Apple Plus.

## 🛠 Getting Started

### Prerequisites

Ensure you have the following installed:

- Node.js and npm
- A text editor (e.g., VSCode)
- A TMDB API key (Refer to the "API Key Setup" section below)

### Installation

1. **Clone the repository:**

```bash
git clone [https://github.com/HamzaH30/React-Netflix-Clone.git](https://github.com/HamzaH30/React-Netflix-Clone.git)
cd React-Netflix-Clone
```

2. **Install dependencies:**

```bash
npm install
```

3. **API Key Setup:**

- Obtain an API Key from [TMDB's website](https://www.themoviedb.org/documentation/api).
- Create a `.env.development` file in the project root.
- Add your API key: `REACT_APP_API_KEY=your_api_key_here`.

4. **Start the development server:**

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the application in your browser.

## 📜 Available Scripts

- `npm start`: Runs the app in development mode.
- `npm test`: Launches the test runner.
- `npm run build`: Builds the app for production.

## 🛠 Project Details

### Requirements

The app dynamically integrates with TMDB API to achieve the following:

#### Main Page (`/`)

- Displays top TV Shows grouped by providers: Netflix, Crave, Disney, and Apple Plus.
- Fetches 20 most popular TV shows for each provider for the Canadian region using TMDB API's TV Discover endpoint.
- Implements `Promise.all` for concurrent API requests.
- Details page link for each show.

#### Search

- Controlled component search bar in the header.
- Search results page showing TV shows matching the query.
- Details page link for each show.

#### TV Show Details

- Description, full backdrop, title, and watchlist management button.
- Add or remove shows from the watchlist, reflected by a "+" or a red checkmark.

#### Watchlist Management

- Hovering over a show's poster shows a "+" sign to add to the watchlist.
- Shows in the watchlist display a red checkmark.
- Watchlist is stored in `localStorage`.

#### My List (`/my-watch-list`)

- Displays all TV shows added to the user's watchlist without specific sorting.

This README aims to provide all necessary information to get started with the project, understand its features, and contribute.
