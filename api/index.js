import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';

dotenv.config();

mongoose.connect(process.env.MONGO)
    .then(() => {
        console.log('Connected with mongo');
    }).catch((err) => {
        console.log(err);
    });

const app = express();

app.use(express.json());

app.listen(3000, () => {
    console.log('Server is running on port 3000!!');
});

app.get('/test', (req, res) => {
    res.send('Hello World!');
});

app.use('/api/user', userRouter);
app.use('/api/auth', authRouter);

app.use((error, request, response, next) => {
    const statusCode = error.statusCode || 500;
    const message = error.message || 'Internal Server Error';
    return response.status(statusCode).json({
        success: false,
        statusCode,
        message
    });
});