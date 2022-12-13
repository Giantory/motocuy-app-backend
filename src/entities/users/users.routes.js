import { Router } from 'express';

//controllers
import signup from './useCases/signup.js';
import login from './useCases/login.js';
import getUser from './useCases/getUser.js';


const router = new Router();

router.post(`/api/users/signup`, signup);
router.post(`/api/users/login`, login);
router.post(`/api/users/getUser`, getUser);

export default router;




