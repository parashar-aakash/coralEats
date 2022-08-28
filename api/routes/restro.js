import express from 'express';
const router = express.Router();
import { create, findAllRestros, findRestro } from '../controllers/restro.js';



router.post('/', create);


router.get('/', findAllRestros);


router.get('/:id', findRestro);

export default router;
