import express from 'express';
import cors from 'cors';

//import routes
import driversRoutes from './entities/drivers/drivers.routes.js';
import departmentsRoutes from './entities/departments/departments.routes.js';
import provinciesRoutes from './entities/provincies/provincies.routes.js';
import districtsRoutes from './entities/districts/districts.routes.js';
import travelsRoutes from './entities/travels/travels.routes.js';
import paymentsRoutes from './entities/payments/payments.routes.js';
import passengersRoutes from './entities/passengers/passengers.routes.js';
import userRoutes from './entities/users/users.routes.js'; 
import panicButtonRoutes from './entities/panicbutton/panicEvent.routes.js';




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

