import { config } from 'dotenv';

import app from './src/app.js';
import { connectToDb } from './src/config/database.js';

config();
const PORT = process.env.PORT || 3000;


connectToDb();


app.listen(PORT, () => {
    console.log(`App listening on ${PORT}`);
});
