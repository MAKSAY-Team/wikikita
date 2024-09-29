import userService from "../service/user-service.js";

const getAll = async (req, res) => {
    const result = await userService.getAll()
    res.status(200).json({
        data: result.rows
    })
}

export default {
    getAll
}