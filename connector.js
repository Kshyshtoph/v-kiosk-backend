import pg from 'pg'
import { Connector } from "@google-cloud/cloud-sql-connector"
import { configDotenv } from 'dotenv'

configDotenv();

const { Pool } = pg;

const connector = new Connector();
const clientOpts = await connector.getOptions({
    instanceConnectionName: 'v-kiosk:europe-west1:v-kiosk-db',
    ipType: 'PUBLIC',
})
const pool = new Pool({
    ...clientOpts,
    user: process.env.DB_UNAME,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    max: 5,
})


export default pool