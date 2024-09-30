import pool from "../db.js";

const create = async (req) => {
    pool.query(
        `INSERT INTO menus(menu_name, image, description, created_at)
        VALUES
            ($1, $2, $3, NOW());`,
        [req.body.menuName, req.body.image, req.body.description]
    )
}

export default {
    create
}