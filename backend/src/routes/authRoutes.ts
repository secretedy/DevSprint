import { Router } from "express";
import { registerUser, loginUser } from "../controllers/authController";

const router = Router();

router.post("/register", registerUser);
router.post("/login", loginUser);

export default router;


//Protected route
import { verifyToken } from "../middleware/authMiddleware";

router.get("/me", verifyToken, (req, res) => {
  res.json({
    message: "Protected route accessed",
    user: (req as any).user
  });
});

