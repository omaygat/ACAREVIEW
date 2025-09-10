import request from "supertest";
import app from "../src/app.js";

describe("POST /api/documents", () => {
  it("debería crear un documento", async () => {
    const res = await request(app)
      .post("/api/documents")
      .send({ title: "Test", content: "Este es un texto de prueba" });

    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty("feedback");
  });
});
