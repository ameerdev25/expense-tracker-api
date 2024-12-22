import express from 'express';
import expenseController from './controllers/expenseController';
import {errorHandler} from './middleware/errorHandler';
import cors from 'cors';

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());
app.use('/expense', expenseController);

app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});