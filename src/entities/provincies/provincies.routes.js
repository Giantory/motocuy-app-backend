import { Router } from 'express';
import auth from '../../middlewares/auth.js';

//controllers
import getAllProvincies from './useCases/getAllProvincies.js';


const router = new Router();

router.post(`/api/provincies/getAllProvincies` , getAllProvincies);


export default router;



