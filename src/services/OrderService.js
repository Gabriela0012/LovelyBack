export default class OrderService {
  constructor(dao) {
    this.dao = dao;
  }
  getOrders = async() =>{
    let result = await this.dao.getAll();
    return result
  }

  createOrder = (order) =>{
    return this.dao.save(order);
  }

  deleteById = async(_id) => {
  
    return this.dao.deleteById(_id)
  }

}