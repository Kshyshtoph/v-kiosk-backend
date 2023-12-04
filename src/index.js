import express from 'express'
import titles from './endpoints/titles.js'
import cors from 'cors'
import pool from './pool.js'

const router = express.Router();
router.use('/',function(req,res,next){
    console.log(req.url, req.path)
    next()
}
)

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

router.get("/", (req, res) => {
    res.json({ message: "ok" });
});

router.get('/titles', titles)
app.use('/api', router)
app.use('/', router)


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});