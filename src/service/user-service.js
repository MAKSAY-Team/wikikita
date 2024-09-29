import pool from "../db.js"

const getAll = async () => {
    const result = pool.query('SELECT * FROM users;')

    return result
}

export default {
    getAll
}
