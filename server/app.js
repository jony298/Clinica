import express from 'express';
import indexRoutes from "./routes/indexRoutes.js"
import cookieParser from 'cookie-parser';
import cors from 'cors'
import {PROT_FRONT} from './config.js'

const app = express();//var para usar libreria
app.use(cors({origin:PROT_FRONT, credentials: true}));

app.use(express.json());//para recibir jsons
app.use(cookieParser());
app.use(indexRoutes);//para usar el enrutador

app.use((req, res, next)=>{
    res.status(404).json({
        Message: 'end point not found'
    })
})

export default app