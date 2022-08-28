import express from 'express';
import { config } from 'dotenv';
config();
const router = express.Router();
import { getDetails } from '../controllers/admin.js';
import { authRole } from '../lib/authMiddleware.js';

const ROLE = { 
    ADMIN: 'admin',
    BASIC: 'basic'
}

router.get('/', authRole(ROLE.ADMIN) , getDetails);

export default router;
