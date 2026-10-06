import express from "express";
import { connectDB } from "./config/db";


const app = express();
const PORT = 3001;

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "DevSprint backend is running!" });
});

//Call the database connection
connectDB();

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

// Connect status routes
import statusRoutes from "./routes/statusRoutes";
app.use("/api", statusRoutes);

// Connect auth routes
import authRoutes from "./routes/authRoutes";
app.use("/api/auth", authRoutes);

//Connect status routes
import projectRoutes from "./routes/projectRoutes";
app.use("/api/projects", projectRoutes);




