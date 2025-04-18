import cors from "cors"
import dotenv from "dotenv"
import express, { Express, Response } from "express"
import authRoutes from "./routes/authRoutes"
import tweetRoutes from "./routes/tweetRoutes"

dotenv.config()

const app: Express = express()

app.use(cors())
app.use(express.json())

app.get("/", (_, res: Response) => {
  res.send("API is live")
})

app.use("/api/auth", authRoutes)
app.use("/api", tweetRoutes)

export default app
