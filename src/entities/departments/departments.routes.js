import { Router } from 'express';

//controllers
import getAllDepartments from './useCases/getAllDepartments.js';

const router = new Router();


router.post(`/api/departments/getAllDepartments`, getAllDepartments);

export default router;


