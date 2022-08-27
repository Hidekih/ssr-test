import express from 'express';
import dotenv from 'dotenv';
import path from 'path';

const PORT = process.env.PORT;
const app = express();

dotenv.config();

app.get('/', (req, res) => {
    return res.sendFile(path.resolve('index.html'))
})

app.listen(PORT, () => console.log(`[server]: Server is running at http://localhost:${PORT}`))