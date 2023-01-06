export default class ProductService {
  constructor(dao) {
    this.dao = dao;
  }
  getProducts = async() =>{
    let result = await this.dao.getAll();
    return result
  }

  getProductById = async(id) =>{
    let result = await this.dao.getById(id);
    return result;
  }

  createProduct = (product) =>{
    return this.dao.save(product);
  }

  updateProduct = (id, product) =>{
    return this.dao.update(id, product);
  }
  deleteById = async(_id) => {
  
    return this.dao.deleteById(_id)
  }


}
