import { Router } from 'express';
import productsController from '../controllers/products.controller.js';
import uploader from '../services/uploader.js'


const router = Router()


router.post('/', uploader.single('thumbnail'), productsController.createProduct)
router.delete('/:id',productsController.deleteById)


export default router;

