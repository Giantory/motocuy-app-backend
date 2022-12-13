import { Router } from 'express';

//controllers
import getTravelsPerDay from './useCases/getTravelsPerDay.js';
import getTravelsPerMonth from './useCases/getTravelsPerMonth.js';
import getTravelsPerDriver from './useCases/getTravelsPerDriver.js';
import getTravelsPerDistrict from './useCases/getTravelsPerDistrict.js';




const router = new Router();

router.post(`/api/travels/getTravelsPerDay`, getTravelsPerDay);
router.post(`/api/travels/getTravelsPerDriver`, getTravelsPerDriver);
router.post(`/api/travels/getTravelsPerMonth`, getTravelsPerMonth);
router.post(`/api/travels/getTravelsPerDistrict`, getTravelsPerDistrict);

export default router;



