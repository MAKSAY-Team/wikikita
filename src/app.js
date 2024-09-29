import express from 'express'
import { router } from './route.js'
import pool from './db.js'

// check database connection
if (pool.connect()) {
    console.log("Database is connected");
} else {
    console.log("Database is not connected");
}

// setup application
const app = express()
app.use(express.json())
app.use(router)

export default app