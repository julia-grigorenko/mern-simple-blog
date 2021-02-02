import express from 'express';
import cors from 'cors';

require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`Server is listening on port: ${port}`));