import { Router } from 'express';
import sessionsController from '../controllers/sessions.controller.js'
import uploaderProfile from '../services/uploaderProfile.js'



const router = Router();


router.post('/register', uploaderProfile.single('avatar'),sessionsController.register)
router.post('/login',sessionsController.login)
router.get('/logout',sessionsController.logout)





export default router