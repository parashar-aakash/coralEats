import express from 'express';
const router = express.Router();
import { getDetails } from '../controllers/admin.js';

router.get('/', getDetails);

export default router;
