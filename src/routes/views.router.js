import { Router } from 'express'
import viewsController from '../controllers/views.controller.js'
import {publicValidation, privateValidation, executePolicies} from '../middlewares/auth.js'

const router = Router()

router.get('/',privateValidation, viewsController.home)
router.get('/homeAdmin',privateValidation, viewsController.homeAdmin)
router.get('/register',publicValidation, viewsController.register)
router.get('/login',publicValidation,viewsController.login)
router.get('/loginfail', viewsController.loginfail)
router.get('/logout', viewsController.logout)
router.get('/registerfail', viewsController.registerfail)
router.get('/productAdd',privateValidation,executePolicies(['ADMIN']), viewsController.productAdd)
router.get('/orders', viewsController.orders)
router.get('/profile/:id', viewsController.profile)

export default router