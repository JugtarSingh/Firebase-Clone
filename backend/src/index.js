import express from 'express'
import cors from 'cors';
import apiRouter from './routes/index.js'
import { PORT } from './config/server-config.js'
const app = express();


app.use(express.json());
app.use(express.urlencoded());
app.use(cors());


app.use('/api',apiRouter);



app.listen(PORT,()=>{
    console.log(`Successfully running on PORT: ${PORT}`);
})