import express from 'express';
import dotenv from 'dotenv';
import http from 'http';
import cors from 'cors';

dotenv.config();

// Data 
import { urlList } from './utils/urlList';
import { apiAuthMiddleware } from './middleware/apiAuth';

// Routes
const index = require('./routes/index');

const app = express();
const port = process.env.PORT || 3000;
const server = http.createServer(app);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors({
  origin: urlList,
  optionsSuccessStatus: 200,
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
}));

// app.use(apiAuthMiddleware);

// Routes
app.use('/', index);

server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});