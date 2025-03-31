🚀 Getting Started (Local Dev)

### 1. Clone the Repo

```bash
git clone https://github.com/your-username/snap-tweet-api.git
cd snap-tweet-api
```

### 2. Set Up Environment Variables

Create a `.env` file in the root directory and add the following:

```
MONGO_URI=utl
PORT=5000
JWT_SECRET=your_secret_key
```

> **Note:** Never expose sensitive information like `MONGO_URI` or `JWT_SECRET` in public repositories. Use `.gitignore` to exclude `.env` from version control.

### 3. Install Dependencies

```bash
npm install
# or
yarn install
```

### 4. Start the Dev Server with Hot Reload

```bash
npm run dev
# or
yarn dev
```

Backend will be live at: [http://localhost:5000](http://localhost:5000/)

---

## 🐳 Run with Docker (Dev Mode)

Run your Express app inside a Docker container with auto-reload on file changes.

### 1. Build and Start

```bash
docker-compose up --build
```

### 2. App will be live at:

```
http://localhost:5000
```

> Uses `nodemon` inside the container + volume mounts for real-time development.

---

## 🧪 Run Tests

```bash
npm run test
# or
yarn test
```

> Uses **Jest** and **Supertest** for API testing
>
> Code coverage files (e.g., `/coverage`) are excluded from Git using `.gitignore`.

---

## 🔄 CI/CD with GitHub Actions

This project includes automated testing and deployment using GitHub Actions.

### ✅ Workflows:

- **On Pull Requests** to `main` or `dev`:
  - Linting and backend test suite
- **On Push to `main`** :
- Runs tests ✅
- If tests pass, triggers deployment via **Render deploy hook**

> 🔐 The deploy hook URL is stored securely as `RENDER_DEPLOY_HOOK` in GitHub Secrets.

---

## 🚀 Deployment (Render)

Deployed using [Render](https://render.com/).

- **Live URL:** [https://snap-tweet-api.onrender.com](https://snap-tweet-api.onrender.com/)
- **Start Command:** `node dist/startServer.js`
- **Build Command:** `tsc`
- **Root Directory:** `.`

---

## 🔁 Manual Redeploy on Render

To manually trigger a deployment (e.g., without code changes):

### 1. Use your Render deploy hook:

```bash
curl -X POST "https://api.render.com/deploy/srv-xxxxxxxxxxxx?key=your-key"
```

> Replace with your actual Render deploy hook.

### 2. Or go to your Render dashboard:

- Open your service
- Click **"Manual Deploy" → "Clear Cache & Deploy"**

---

## 🗂 Project Structure

```
.
├── src/
│   ├── config/         # DB connection, constants
│   ├── controllers/    # Route handlers
│   ├── middleware/     # Auth, error handlers
│   ├── models/         # Mongoose models
│   ├── routes/         # Express routes
│   ├── server.ts       # App initialization
│   └── startServer.ts  # Starts server
├── tests/              # Unit + integration tests
├── dist/               # Compiled JS (after build)
├── .env                # Local environment variables
├── Dockerfile          # (optional) for production
├── Dockerfile.dev      # Dev container with nodemon
├── docker-compose.yml
├── package.json
├── tsconfig.json
└── README.md
```
