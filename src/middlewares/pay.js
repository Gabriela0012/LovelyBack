import {productsService} from '../services/index.js'




export default async function getOrderAmount(items){
  let amount = 0;

  for(let index = 0; index < items.length; index++){
    const product = items[index];
    const itemDB = await productsService.getProductById(product.id)


    let operation = itemDB.price * product.qty;
    amount += operation;
  }
 
  return amount;
}