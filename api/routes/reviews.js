import express from 'express';
const router = express.Router();
import { createReviews, findReviewsById } from '../controllers/reviews.js';



router.post('/', createReviews);


router.get('/:id', findReviewsById);

export default router;
