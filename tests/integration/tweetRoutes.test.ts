import request from "supertest"
import app from "../../src/server" // Ensure `app` is exported as default from server.ts

let token: string
// Removed unused tweetId variable

beforeAll(async () => {
  try {
    // 🔥 Get a valid token by signing up & logging in
    const signupRes = await request(app).post("/api/auth/signup").send({
      username: "testuser",
      email: "testuser@example.com",
      password: "password123",
    })
    console.log("Signup Response:", signupRes.status, signupRes.body)

    token = signupRes.body.token as string // 🔥 Save token for protected routes
  } catch (error) {
    console.error("Error during setup:", error)
  }
})

describe("Tweet Routes - Integration Tests", () => {
  it("should create a tweet with a valid token", async () => {
    // Removed unused tweetId declaration
    const res = await request(app)
      .post("/api/tweets")
      .set("Authorization", `Bearer ${token}`) // 🔥 Attach Token
      .send({ content: "Hello, Twitter!" })

    expect(res.status).toBe(201)
    expect(res.body).toHaveProperty("_id")
    expect(res.body.content).toBe("Hello, Twitter!")
  })

  it("❌ should return 401 if no token is provided", async () => {
    const res = await request(app)
      .post("/api/tweets")
      .send({ content: "Unauthorized Tweet" })

    expect(res.status).toBe(401)
    expect(res.body).toHaveProperty("error", "Unauthorized") // ✅ Fix expected error message
  })
})
