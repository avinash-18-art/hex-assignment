import express from 'express';
import { fetchData } from '../controllers/api.js';

const Router = express.Router();

Router.route('/data').get(fetchData);

export default Router;