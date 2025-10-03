# Personal Coding Mentor Agent

An AI-powered assistant to help you learn and practice coding. This project includes a simple backend API and a frontend UI for interacting with the agent.

## Features

- **Explain Problems**: Paste a coding problem and receive a beginner‑friendly explanation.  
- **Review Code**: Submit your solution and get feedback based on provided tests.  
- **Track Progress**: (Stub) Record completed problems for future reference.  
- **Extensible Design**: Built with a modular backend and a simple frontend, you can easily expand the agent with real AI models and additional features.

## Tech Stack

- **Backend**: [Express](https://expressjs.com/) (Node.js).  
- **Frontend**: Plain HTML, CSS, and JavaScript (can be replaced with React).

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/en) (v16 or later)
- (Optional) An API key for an AI model (such as OpenAI) if you plan to integrate real explanations.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/personal-coding-mentor-agent.git
   cd personal-coding-mentor-agent/backend
   ```

2. Install backend dependencies:

   ```bash
   npm install
   ```

3. Start the backend server:

   ```bash
   npm start
   ```

   By default the server runs on port `3001`.

4. Open the frontend:

   You can open `frontend/index.html` directly in your browser. Alternatively, serve it with any static file server.

### Usage

- **Explain a Problem**  
  In the "Explain a Problem" section, describe the coding problem and choose a language. Click **Explain** to receive a step‑by‑step breakdown.  
- **Review Code**  
  In the "Review Code" section, paste your solution and describe the tests or expected behavior. Click **Review** to receive feedback.  
- **Progress Tracking**  
  The backend stores completed problem IDs in `backend/progress.json`. You can fetch and update progress via the `/api/progress` endpoint.

### API Endpoints

| Method | Endpoint        | Description                             |
|-------:|-----------------|-----------------------------------------|
| POST   | `/api/explain`  | Explain a coding problem (stub).         |
| POST   | `/api/review`   | Review a code solution (stub).           |
| GET    | `/api/progress` | Retrieve completed problems.             |
| POST   | `/api/progress` | Mark a problem as completed.             |

#### Example Request

```sh
curl -X POST http://localhost:3001/api/explain \
  -H 'Content-Type: application/json' \
  -d '{"problem":"Write a function to add two numbers","language":"javascript"}'
```

#### Example Response

```json
{
  "explanation": "Here is a breakdown of the problem:\nWrite a function to add two numbers\n\nThis is a stub explanation."
}
```

## Extending the Agent

This project provides a skeleton you can extend. To integrate an actual AI model:

- Use an API client (e.g. the OpenAI SDK) inside `backend/index.js`.
- Replace the stub explanation and review logic with real prompts and responses.
- Add authentication and more robust error handling as needed.
- Switch the frontend to a framework like React for a richer UX.

## License

MIT
