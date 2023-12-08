import express from 'express'
import { makeTransfer } from './transfers.controller.js';

export const router = express.Router();

router.post('/', makeTransfer);
