import menuService from '../service/menu-service.js'

const create = async (req, res) => {
    const result = await menuService.create(req)
    res.status(200).json({
        "message": "menu is created"
    })
}

export default {
    create
}