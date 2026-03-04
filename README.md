# Voting Management System

A full-stack web application for managing and visualizing election results in Somaliland. The system tracks votes for presidential candidates and political parties across the regions of Somaliland, providing real-time statistics and interactive maps.

## Features

- **Dashboard** – Overview of total votes with animated counters and charts
- **Presidential Voting** – Track and display votes per presidential candidate (Kulmiye, Wadani, UCID)
- **Party Voting** – Manage and display results for political parties
- **Interactive Map** – Visualize vote distribution across Somaliland's regions (Awdal, Maroodi-Jeex, Sahil, Togdheer, Sanaag, Sool)
- **User Management** – Admin interface to manage system users
- **Authentication** – JWT-based login with protected routes

## Tech Stack

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB (via Mongoose)
- **Authentication**: JSON Web Tokens (JWT) + bcrypt
- **File Uploads**: Multer
- **Other**: CORS, cookie-parser, dotenv

### Frontend
- **Framework**: React 18
- **Build Tool**: Vite
- **Routing**: React Router DOM v6
- **Styling**: Tailwind CSS
- **Charts**: Chart.js + react-chartjs-2
- **HTTP Client**: Axios
- **UI Components**: Radix UI, Lucide React

## Project Structure

```
vote/
├── backend/
│   ├── config/          # Database connection
│   ├── controllers/     # Route controllers (users, presidential, parties)
│   ├── middleware/      # Authentication middleware
│   ├── models/          # Mongoose models (User, PresidentialVote, PartiesVote)
│   ├── routes/          # API route definitions
│   ├── upload/          # Uploaded file storage
│   └── main.js          # Express app entry point
└── frontend/
    ├── public/          # Static assets
    └── src/
        ├── api/         # Axios API calls
        ├── components/  # Reusable UI components
        ├── layouts/     # Page layouts
        ├── lib/         # Utility functions
        └── pages/       # Page-level components
```

## Getting Started

### Prerequisites

- Node.js (v18 or later)
- MongoDB instance (local or MongoDB Atlas)

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the `backend` directory:
   ```env
   PORT=8080
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```
   The API will be available at `http://localhost:8080`.

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```
   The app will be available at `http://localhost:5173`.

## API Endpoints

| Method | Endpoint                  | Description                  |
|--------|---------------------------|------------------------------|
| POST   | `/api/v1/users/login`     | User login                   |
| GET    | `/api/v1/users`           | Get all users                |
| POST   | `/api/v1/users`           | Create a user                |
| GET    | `/api/v1/votes`           | Get all presidential votes   |
| POST   | `/api/v1/votes`           | Add a presidential vote      |
| GET    | `/api/v1/parties`         | Get all party votes          |
| POST   | `/api/v1/parties`         | Add a party vote             |

## Frontend Routes

| Path       | Description                        |
|------------|------------------------------------|
| `/`        | Home dashboard                     |
| `/login`   | Login page                         |
| `/kulmiye` | Kulmiye party results              |
| `/wadani`  | Wadani party results               |
| `/ucid`    | UCID party results                 |
| `/urur`    | All parties overview               |
| `/xisbi`   | Party details page                 |
| `/users`   | User management                    |

## License

ISC
