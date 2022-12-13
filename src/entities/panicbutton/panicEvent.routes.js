import { Router } from 'express';

//controllers
import getPanicEvent from './useCases/getPanicEvent.js';


const router = new Router();



router.post(`/api/panicEvent/getPanicEvent`, getPanicEvent);



export default router
