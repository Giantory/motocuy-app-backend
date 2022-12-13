import { Router } from 'express';

//controllers
import getAllDrivers from './useCases/getAllDrivers.js';
import getActiveDrivers from './useCases/getActiveDrivers.js';
import getDriver from './useCases/getDriver.js';

const router = new Router();



router.post(`/api/drivers/getAllDrivers`, getAllDrivers);
router.post(`/api/drivers/getActiveDrivers`, getActiveDrivers);
router.post(`/api/drivers/getDriver`, getDriver);


export default router

