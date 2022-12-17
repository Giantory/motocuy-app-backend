import { Router } from 'express';
import multer from 'multer';
import readXlsxFile from 'read-excel-file/node'



//controllers
import getAllDrivers from './useCases/getAllDrivers.js';
import getActiveDrivers from './useCases/getActiveDrivers.js';
import getDriver from './useCases/getDriver.js';
import postDrivers from './useCases/postDriversFromExcel.js';
import path from 'path';

const storage = multer.diskStorage({
    destination: "./public/uploads/files",
    filename: function (req, file, cb) {
      cb(
        null,
        file.originalname + "-" + Date.now() + path.extname(file.originalname)
      );
    },
  });
  const upload = multer({ storage: storage });


const router = new Router();



router.post(`/api/drivers/getAllDrivers`, getAllDrivers);
router.post(`/api/drivers/getActiveDrivers`, getActiveDrivers);
router.post(`/api/drivers/getDriver`, getDriver);
router.post(`/api/drivers/postDriver`,  upload.single("file"), postDrivers);


export default router

