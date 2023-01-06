import {Router} from 'express';
import { ordersService,productsService } from "../services/index.js";


import nodemailer from 'nodemailer'
import getOrderAmount from '../middlewares/pay.js';



const transporter = nodemailer.createTransport({
  service: 'gmail',
  port: 587,
  auth: {
      user: 'gabega10@gmail.com',
      pass: 'zmnikstrsyhictiy'
  }
});

const router = Router()


router.get('/',async (req, res) => {
  let orders = await ordersService.getOrders();
  res.send(orders)
})
router.delete('/:id',async (req, res) => {
  await ordersService.deleteById(req.params.id)
  res.redirect('/orders')
})


router.post('/', async (req, res) => {
 const email = req.body.email
 const items = req.body.items
 
 const order = {email, items}
 
 const totalPay = await getOrderAmount(items)


  
  try {
    let newOrder = await ordersService.createOrder(order);
    console.log(newOrder)



    let result = await transporter.sendMail({
      from: 'yo',
      to: `${email}`,
      subject:`hola tu pedido es ${newOrder._id}`,
      html: `
      <div class="row shoppingCartItem">
        
        <div class="col-4">
          <div class="shopping-cart-quantity d-flex justify-content-between align-items-center  h-100 border-bottom pb-2 pt-3">
            <p class="item-price mb-0 shoppingCartItemPrice">Los productos del pedido ${JSON.stringify(items)}</p>
          </div>
        </div>
        <div class="col-2">
          <div class="shopping-cart-price d-flex aling-items-center h-100 border-bottom pb-2 pt-3">
            <p class="item-price mb-0 shoppingCartItemPrice">El monto a pagar $ ${totalPay}</p>
          </div>
        </div>
      
    </div>`
    })

    console.log(result)
    res.send(result)
    

    
  } catch (error) {
    res.json({message: error.message})
  }
})



export default router;