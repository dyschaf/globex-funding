import express from "express";
import { submitted } from "../controllers/submit_form.js";
// import { VerifyToken } from "../middleware/VerifyToken.js";

const router = express.Router();

// router.get("/users", VerifyToken, getUsers);
// router.get("/form", Search);
// router.get("/device/:detail", Phone);
router.post("/form", submitted);
// router.post("/SignUp", SignUp);
// router.post("/Logout", Logout);
// router.get("/token", VerifyToken, (req, res) => {
//   res.sendStatus(200);
// });

export default router;
