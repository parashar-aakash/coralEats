import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import { config } from 'dotenv';
import restroRoute from './api/routes/restro.js';
import reviewsRoute from './api/routes/reviews.js';
config();
const envVars = process.env;
mongoose.set('useFindAndModify', false);
mongoose.set('useNewUrlParser', true);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);
mongoose.connect(envVars.MONGO_URL);

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());
console.log('PORT', process.env.PORT);
const PORT = process.env.PORT;

app.use('/api/restro', restroRoute);
app.use('/api/reviews', reviewsRoute);

app.listen(PORT, () => {
    console.log(`Server listen from ${PORT}`);
});
 