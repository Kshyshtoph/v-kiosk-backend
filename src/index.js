import express from 'express'
import titles from './endpoints/titles.js'
import cors from 'cors'
import pool from './pool.js'

const app = express();
const port = 3000;
app.use(cors({
    origin: process.env.FRONTEND_ORIGIN
}))

app.use(express.json());
app.use(
    express.urlencoded({
        extended: true,
    })
);

pool.query('SELECT NOW();').then(({rows})=> console.table(rows))

app.get("/", (req, res) => {
    res.json({ message: "ok" });
});
app.get('/titles', titles)

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});