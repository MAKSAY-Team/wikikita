import express from 'express'
import userController from './controller/user-controller.js'
import menuController from './controller/menu-controller.js'

const router = express.Router()

// users route
router.get("/api/users", userController.getAll)

// menus route
router.post("/api/menus", menuController.create)

export {
    router
}