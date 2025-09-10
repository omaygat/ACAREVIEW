import mongoose from "mongoose";

const documentSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  feedback: { type: String }, // resultado del análisis IA
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("Document", documentSchema);
