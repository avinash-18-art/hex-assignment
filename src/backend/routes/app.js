import express from 'express';
export const app = express();
import API from "./routes/api.js"
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/v1', API);