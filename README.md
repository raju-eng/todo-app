# Todo App with Docker

This project is a multi-container Todo app built using Docker. It includes:
- React (Frontend)
- Node.js + Express (Backend API)
- MongoDB (Database)

## How to Run

1. Clone the repository:
   ```bash
   git clone <repository_url>
   cd todo-app
   ```

2. Build and start the containers:
   ```bash
   docker-compose up --build
   ```

3. Access the application:
   - Frontend: [http://localhost:3000](http://localhost:3000)
   - Backend API: [http://localhost:5000](http://localhost:5000)

4. Stop the containers:
   ```bash
   docker-compose down
   ```

## Project Structure
```
todo-app/
├── backend/
│   ├── Dockerfile
│   ├── package.json
│   └── index.js
├── frontend/
│   ├── Dockerfile
│   ├── package.json
│   └── src/
│       └── App.js
├── docker-compose.yml
└── README.md
```
