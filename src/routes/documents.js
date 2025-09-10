import express from "express";
import Document from "../models/dese.js";
import { analyzeText } from "../services/aiService.js";

const router = express.Router();

// Subir documento y analizar con IA
router.post("/", async (req, res) => {
  try {
    const { title, content, author } = req.body;

    // 1) Pasamos el texto a la IA
    const feedback = await analyzeText(content);

    // 2) Guardamos en MongoDB
    const doc = new Document({ title, content, author, feedback });
    await doc.save();

    res.status(201).json(doc);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "No se pudo guardar el documento" });
  }
});

// Listar documentos
router.get("/", async (req, res) => {
  const docs = await Document.find();
  res.json(docs);
});

export default router;
