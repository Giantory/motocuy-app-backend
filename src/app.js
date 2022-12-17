import express from 'express';
import cors from 'cors';

//import routes
import driversRoutes from './api/drivers/drivers.routes.js';
import departmentsRoutes from './api/departments/departments.routes.js';
import provinciesRoutes from './api/provincies/provincies.routes.js';
import districtsRoutes from './api/districts/districts.routes.js';
import travelsRoutes from './api/travels/travels.routes.js';
import paymentsRoutes from './api/payments/payments.routes.js';
import passengersRoutes from './api/passengers/passengers.routes.js';
import userRoutes from './api/users/users.routes.js'; 
import panicButtonRoutes from './api/panicbutton/panicEvent.routes.js';




const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin: '*'
  }));


app.use(driversRoutes);
app.use(departmentsRoutes);
app.use(districtsRoutes);
app.use(provinciesRoutes);
app.use(travelsRoutes);
app.use(paymentsRoutes);
app.use(passengersRoutes);
app.use(userRoutes);
app.use(panicButtonRoutes);

export default app;

