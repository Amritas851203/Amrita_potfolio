# Amrita Portfolio - Full Stack Application

A modern full-stack portfolio application with a React + Vite frontend and a Node.js + Express backend.

---

## Project Structure

```text
Amrita_potfolio/
├── frontend/
│   ├── public/
│   ├── src/
│   ├── package.json
│   ├── package-lock.json
│   ├── index.html
│   ├── vite.config.js
│   ├── eslint.config.js
│   └── .gitignore
│
├── backend/
│   ├── src/
│   │   └── server.js
│   ├── package.json
│   └── .gitignore
│
└── README.md
```

---

## Getting Started

### 1. Frontend Setup

Navigate to the `frontend` folder and install dependencies:

```bash
cd frontend
npm install
npm run dev
```

The frontend will run on [http://localhost:5173](http://localhost:5173) (or next available Vite port).

### 2. Backend Setup

Navigate to the `backend` folder and install dependencies:

```bash
cd backend
npm install
npm run dev
```

The backend server will run on [http://localhost:5000](http://localhost:5000).

#### Health Check Endpoint
- **URL**: `GET http://localhost:5000/api/health`
- **Response**:
```json
{
  "success": true,
  "message": "Backend is running"
}
```
