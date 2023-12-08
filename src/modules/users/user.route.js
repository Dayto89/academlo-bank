import  express  from "express";
import { getHistory, login, signup } from "./user.controller.js";

export const router = express.Router();

router.post('/signup', signup);

router.post('/login', login);

router.get('/:id/history', getHistory)