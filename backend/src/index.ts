import express from 'express';
import cors from 'cors';
import ordersRouter from './routes/orders';

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());
app.use('/orders', ordersRouter);

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
