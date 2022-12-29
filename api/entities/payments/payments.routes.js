import { Router } from 'express';

//controllers
import getPaymentsPerDriver from './useCases/getPaymentsPerDriver.js';
import getAllPayments from './useCases/getAllPayments.js';



const router = new Router();

router.post(`/api/payments/getPaymentsPerDriver`, getPaymentsPerDriver);
router.post(`/api/payments/getAllPayments`, getAllPayments);


export default router;


