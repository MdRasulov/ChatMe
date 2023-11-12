import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import authRoutes from './routes/auth.js';
import userRoutes from './routes/users.js';
import postRoutes from './routes/posts.js';
import contactRoutes from './routes/contacts.js';
import searchRoutes from './routes/search.js';
import { upload, uploadController } from './controllers/upload.js';

const app = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Credentials', true);
  next();
});
app.use(express.json());
app.use(
  cors({
    origin: 'http://localhost:5173',
  })
);
app.use(cookieParser());

app.post('/api/upload', upload.single('file'), uploadController);

app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/posts', postRoutes);
app.use('/api/contacts', contactRoutes);
app.use('/api/search', searchRoutes);

app.listen(8800, () => {
  console.log('api is working');
});
