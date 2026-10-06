import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  owner: { type: String, required: true }, // username from JWT
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("Project", projectSchema);
