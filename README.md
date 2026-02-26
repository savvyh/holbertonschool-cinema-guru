# Holberton School Cinema Guru

A full-stack cinema application built with React and Node.js, allowing users to discover, search, and manage their favorite movies and watchlists.

## Overview
<img width="1902" height="991" alt="image" src="https://github.com/user-attachments/assets/65402cca-7ace-476d-9572-0fd2ed0c8e82" />

Cinema Guru is a modern web application that provides a comprehensive movie browsing experience. Users can explore a curated collection of films, filter by various criteria, and maintain personalized lists of favorites and movies to watch later.

## Frontend Features

### Authentication System

The application features a complete authentication flow with:

- **Sign In / Sign Up** - Toggle between login and registration forms
- **JWT Token Management** - Secure authentication using JSON Web Tokens stored in localStorage
- **Protected Routes** - Automatic redirection based on authentication status

### Dashboard Layout

Once authenticated, users access a full-featured dashboard with:

#### Navigation

- **Header** - Displays username and logout functionality
- **Sidebar** - Quick navigation between different sections:
  - Home (Browse all movies)
  - Favorites (Your liked movies)
  - Watch Later (Your watchlist)

#### Home Page

The main browsing interface includes:

- **Advanced Filtering System**
  - Year range selector (minimum and maximum year)
  - Genre multi-select with tags
  - Title search bar
  - Sort options: Latest, Oldest, Highest Rated, Lowest Rated
- **Movie Grid** - Responsive grid layout displaying movie cards
- **Load More** - Pagination to browse additional movies
- **Real-time Updates** - Filters apply instantly without page refresh

#### Movie Cards

Each movie card displays:

- Movie poster
- Title and release year
- IMDb rating
- Genre tags
- Quick action buttons (favorite, watch later)

#### Favorites Page

- Dedicated view for movies marked as favorites
- Clean grid layout with all your liked movies
- Page title: "Movies you like"

#### Watch Later Page

- Dedicated view for movies saved to watch later
- Same grid layout for consistency
- Page title: "Movies to watch later"

### Technology Stack (Frontend)

- **React 18.3.1** - UI framework
- **React Router DOM 7.6.2** - Client-side routing
- **Axios 1.7.7** - HTTP client for API requests
- **Vite 7.3.1** - Build tool and dev server
- **FontAwesome** - Icon library
- **Normalize.css** - CSS reset for consistency

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- Yarn package manager
- Docker and Docker Compose (for backend)

### Installation

#### 1. Clone the Repository

```bash
git clone <repository-url>
cd holbertonschool-cinema-guru
```

#### 2. Setup Backend

```bash
cd backend
docker compose up -d
```

The backend will:

- Start on port 8000
- Initialize a PostgreSQL database
- Seed the database with movie data from `dump.sql`

#### 3. Setup Frontend

```bash
cd frontend/holberton-cinema
yarn install
```

#### 4. Start Development Server

```bash
yarn dev
```

The frontend will start on `http://localhost:5173` (Vite default port)

### Available Scripts (Frontend)

- `yarn dev` - Start development server with hot reload
- `yarn build` - Build for production
- `yarn preview` - Preview production build locally
- `yarn lint` - Run ESLint for code quality

## API Endpoints

### Base URL

```
http://localhost:8000/api
```

### Authentication

#### Register

```http
POST /auth/register
Content-Type: application/json

{
  "username": "string",
  "password": "string"
}
```

**Response:**

```json
{
  "message": "User created successfully",
  "accessToken": "jwt_token_here"
}
```

#### Login

```http
POST /auth/login
Content-Type: application/json

{
  "username": "string",
  "password": "string"
}
```

**Response:**

```json
{
  "message": "Logged in successfully",
  "accessToken": "jwt_token_here"
}
```

#### Verify Token

```http
POST /auth/
Authorization: Bearer {token}
```

**Response:**

```json
{
  "userId": 1,
  "username": "string"
}
```

### Titles (Movies)

All title endpoints require authentication via Bearer token.

#### Advanced Search

```http
GET /titles/advancedsearch?minYear=1970&maxYear=2022&genres=Action,Drama&title=movie&sort=latest&page=1
Authorization: Bearer {token}
```

**Query Parameters:**

- `minYear` - Minimum release year
- `maxYear` - Maximum release year
- `genres` - Comma-separated genre list
- `title` - Search by title (partial match)
- `sort` - Sort order: `latest`, `oldest`, `highestrated`, `lowestrated`
- `page` - Page number for pagination

**Response:**

```json
{
  "totalCount": 10,
  "titles": [
    {
      "id": 1,
      "imdbId": "tt1234567",
      "title": "Movie Title",
      "released": 2020,
      "imdbrating": 8.5,
      "genres": ["Action", "Drama"]
    }
  ]
}
```

#### Get Title by IMDb ID

```http
GET /titles/:imdbId
Authorization: Bearer {token}
```

#### Get Favorite Movies

```http
GET /titles/favorite/
Authorization: Bearer {token}
```

**Response:**

```json
{
  "movies": [...]
}
```

#### Add to Favorites

```http
POST /titles/favorite/:imdbId
Authorization: Bearer {token}
```

#### Remove from Favorites

```http
DELETE /titles/favorite/:imdbId
Authorization: Bearer {token}
```

#### Get Watch Later List

```http
GET /titles/watchlater/
Authorization: Bearer {token}
```

#### Add to Watch Later

```http
POST /titles/watchlater/:imdbId
Authorization: Bearer {token}
```

#### Remove from Watch Later

```http
DELETE /titles/watchlater/:imdbId
Authorization: Bearer {token}
```

### User Activity

#### Get All Activities

```http
GET /activity/
Authorization: Bearer {token}
```

Returns a list of user activities (favorites added, watch later additions) with user and title information.

## Project Structure

```
holbertonschool-cinema-guru/
├── backend/
│   ├── config/         # Database configuration
│   ├── models/         # Sequelize models (User, Title, UserActivity)
│   ├── routes/         # API route handlers
│   ├── utils/          # Helper functions (JWT, password hashing)
│   ├── docker-compose.yml
│   ├── Dockerfile
│   ├── dump.sql        # Database seed file
│   └── index.js        # Express server entry point
│
└── frontend/
    └── holberton-cinema/
        ├── src/
        │   ├── components/     # Reusable UI components
        │   │   ├── general/    # Button, Input, SearchBar
        │   │   ├── movies/     # MovieCard, Filter, Tag
        │   │   └── navigation/ # Header, Sidebar
        │   ├── routes/         # Page components
        │   │   ├── auth/       # Authentication, Login, Register
        │   │   └── dashboard/  # Dashboard, HomePage, Favorites, WatchLater
        │   ├── App.jsx         # Main app component
        │   └── main.jsx        # Entry point
        └── package.json
```

## Key Features Summary

- User authentication and authorization
- Advanced movie search and filtering
- Responsive grid layout for movie browsing
- Personal favorites collection
- Watch later list functionality
- Real-time filter updates
- Pagination for large datasets
- Clean and intuitive UI/UX
- RESTful API architecture
- JWT-based security

## Backend Technologies

- **Express.js** - Web framework
- **Sequelize** - ORM for PostgreSQL
- **PostgreSQL** - Database
- **bcrypt** - Password hashing
- **jsonwebtoken** - JWT authentication
- **Docker** - Containerization

---
