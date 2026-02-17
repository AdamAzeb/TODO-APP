# PERN Todo App

A full-stack todo application built with PostgreSQL, Express, React, and Node.js.

## Quick Start (Docker)

The easiest way to run the app. Only requires [Docker](https://www.docker.com/).

```bash
docker compose up --build
```

This starts everything — Postgres, the server, and the React client. The database and table are created automatically.

- Client: http://localhost:3000
- Server API: http://localhost:5001

To stop:
```bash
docker compose down
```

---

## Manual Setup

### Prerequisites

- [Node.js](https://nodejs.org/)
- [PostgreSQL](https://www.postgresql.org/)

### Database Setup

1. Open your PostgreSQL client (psql or pgAdmin)
2. Create the database and table:

```sql
CREATE DATABASE perntodo;

\c perntodo

CREATE TABLE todo(
    todo_id SERIAL PRIMARY KEY,
    description VARCHAR(255)
);
```

### Server Setup

1. Navigate to the server directory:
```bash
cd pern-todo/server
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file with your database credentials:
```
PG_USER=postgres
PG_PASSWORD=your_password
PG_HOST=localhost
PG_PORT=5432
PG_DATABASE=perntodo
```

4. Start the server:
```bash
node index.js
```

The API will be running on http://localhost:5001.

### Client Setup

1. In a separate terminal, navigate to the client directory:
```bash
cd pern-todo/client
```

2. Install dependencies:
```bash
npm install
```

3. Start the React app:
```bash
npm start
```

The app will be running on http://localhost:3000.

## API Endpoints

| Method | Route | Description |
|--------|-------|-------------|
| GET | /todos | Get all todos |
| GET | /todos/:id | Get a single todo |
| POST | /todos | Create a todo |
| PUT | /todos/:id | Update a todo |
| DELETE | /todos/:id | Delete a todo |