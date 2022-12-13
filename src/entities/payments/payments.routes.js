import { Router } from 'express';

//controllers
import getPaymentsPerDriver from './useCases/getPaymentsPerDriver.js';



const router = new Router();

router.post(`/api/payments/getPaymentsPerDriver`, getPaymentsPerDriver);


export default router;



