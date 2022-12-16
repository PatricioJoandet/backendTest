import { Router } from "express";
import passport from "passport";

import { AuthController } from '../../controllers/AuthController/index.js';

const router = Router();

router.post('/signup', AuthController.signUp);

router.post('/signup', passport.authenticate('login'), async (req, res) => {
  res.send({ success: true, message: 'Logged successfully', user: req.user });
})

export { router as AuthRouter };
