import UsersDao from '../dao/UsersDao.js';
import CartsDao from '../dao/CartsDao.js';
import ProductsDao from '../dao/ProductsDao.js';
import OrderDao from '../dao/OrderDao.js';

import UserService from './UserService.js';
import CartsService from './CartsService.js';
import ProductsService from './ProductService.js';
import OrderService from './OrderService.js';

export const usersService = new UserService(new UsersDao());
export const cartsService = new CartsService(new CartsDao());
export const productsService = new ProductsService(new ProductsDao());
export const ordersService = new OrderService(new OrderDao());