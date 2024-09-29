import dotenv from 'dotenv'
import app from "./src/app.js";

dotenv.config()
app.listen(process.env.APP_PORT, () => {
    console.log(`Application started at ${process.env.APP_HOST}:${process.env.APP_PORT}`);
})