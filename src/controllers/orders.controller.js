import { productsService, ordersService } from "../services/index.js";

const createOrder = async(products) =>{
  let amount = 0;

  for(let index = 0; index < products.length; index++){
    const product = products[index];
    const itemDB = await productsService.getItemById(product.id)


    let operation = itemDB.price * product.qty;
    amount += operation;
  }

  return amount;
}

deleteById = async(id) => {
  let conditions = {_id:id}
  await ordersService.deleteById(conditions)
}


export default {
  createOrder,
  deleteById
}