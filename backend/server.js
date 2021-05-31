import express from 'express';
import routes from './routes';

require('dotenv').config();
const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use('/api', routes);
const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`Server is listening on port: ${port}`));