import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import morgan from 'morgan';
import dotenv from 'dotenv'
import mongoose from 'mongoose';
import productRouter from './routes/productsRoutes.js';
import billsRouter from './routes/billsRoutes.js';
import categorysRouter from './routes/categoryRouter.js';
import loginRouter from "./routes/loginRouters.js"
// require('colors');

dotenv.config();

// connect with mongodb
mongoose.connect(process.env.MONGODB_URI).then(()=>{
    console.log('connected to DB')
}).catch((err)=>{
    console.log(err.message);
})

const app = express();

//middlewares
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan('dev'));

//routes
app.use('/api/login/',loginRouter)
app.use('/api/products/', productRouter);
app.use('/api/bills/', billsRouter);
app.use('/api/category/',categorysRouter)

//create port
const PORT = process.env.PORT || 5000;

//listen
app.listen(PORT, ()=>{
    console.log(`server is running on port: http://localhost:${PORT}`);
})