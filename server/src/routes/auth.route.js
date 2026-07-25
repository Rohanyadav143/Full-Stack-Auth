import express from "express";
import {
  register,
  login,
  me,
  refreshToken,
  logout,
} from "../controllers/auth.controller.js";
import verifyAccessToken from "../middlewares/auth.middleware.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);

router.post("/refresh", refreshToken);

router.get("/me", verifyAccessToken, me);

export default router;
