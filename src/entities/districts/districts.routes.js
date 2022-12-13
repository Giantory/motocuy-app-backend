import { Router } from 'express';

//controllers
import getAllDistricts from './useCases/getAllDistricts.js';


const router = new Router();

router.post(`/api/districts/getAllDistricts`, getAllDistricts);

export default router;











