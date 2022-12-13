import { Router } from 'express';

//controllers
import getAllPassengers from './useCases/getAllPassengers.js'



const router = new Router();

router.post(`/api/passengers/getAllPassengers`, getAllPassengers);

export default router;




