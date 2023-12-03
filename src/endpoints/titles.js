import pool from '../pool.js'

export default function getTiltles(req, res) {
    const page = req.params.page || 0
    const pageSize = 10
    console.log(JSON.stringify({ page, pageSize }))
    pool.query(`SELECT * FROM titles LIMIT 10 OFFSET ${page * pageSize};`).then(({ rows }) => res.send(rows))
}