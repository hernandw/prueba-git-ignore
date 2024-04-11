import pg from 'pg';
const { Pool } = pg;

process.loadEnvFile()

const {DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_NAME} = process.env

export const pool = new Pool({
    host: DB_HOST,
    port: DB_PORT,
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME
    
})