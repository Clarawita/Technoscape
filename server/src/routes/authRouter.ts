import { Router } from "express";
import { login } from "../functions/auth/login";
import { protect } from "../functions/auth/protect";

const router = Router();

router.post("/login", protect, login);

export default router;
