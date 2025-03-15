import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import api from './routes/api';

dotenv.config();

const app = express();
const PORT = 3000;


app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI as string, {
  dbName: 'grillme'
})
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB Connection Error:', err));

app.use('/api', api);

app.listen(PORT, () => console.log(`Server running on ${PORT}`));

export default app;