import ordersModel from './models/order.dao.js';


export default class OrderDao{

  getAll = () =>{
    return ordersModel.find().lean();
  }

  getById = (id) =>{
    return ordersModel.findOne({_id:id});
  }
  save = (order) =>{
    return ordersModel.create(order);
  }

  deleteById = (id) => {
    return ordersModel.findByIdAndDelete({_id:id})
  }

}








  