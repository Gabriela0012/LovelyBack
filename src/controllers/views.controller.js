import {ROUTES} from '../constants/routes.js'
import { productsService, ordersService, usersService } from '../services/index.js'
import config from '../config/config.js'



const home = async (req,res) =>{
  console.log(req.user)
  const routes = ROUTES[req.user.role]
  const products = await productsService.getProducts();
  console.log(products)
  res.render('home',{
    title: 'Home',
    user: req.user,
    routes: routes,
    products
  });
  // res.render('home')
}
const homeAdmin = async (req,res) =>{
  console.log(req.user)
  const routes = ROUTES[req.user.role]
  const products = await productsService.getProducts();
  res.render('homeAdmin',{
    title: 'Home Admin',
    user: req.user,
    routes: routes,
    products
  });
  // res.render('home')
}

const register = (req,res) =>{
  res.render('register');
}

const login = (req,res) =>{
  res.render('login');
}

const loginfail = (req,res) =>{
  res.render('loginFail');
}

const registerfail = (req,res) =>{
  res.render('registerFail');
}

const productAdd = (req,res) =>{
  res.render('productAdd');
}

const logout = async (req,res) =>{
  console.log('logout');
  const token = req.cookies[config.jwt.COOKIE]
  res.cookie(config.jwt.COOKIE,token,{maxAge:1,httpOnly:true}).redirect('/login')
}

const profile = async (req,res) =>{
  
  let user= await usersService.getUserById(req.params.id)
  res.render('profile',{
    title: 'profile',
    user

    
  });
}
const detail = async (req,res) =>{
  
  let product= await productsService.getProductById(req.params.id)
  res.render('detail',{
    title: 'detail',
    product
  });
}

}
const orders = async(req,res) =>{
 
  const orders = await ordersService.getOrders();

  res.render('orders',{
    title: 'Admin orders',
    orders,
  });
 
}


export default {
  orders,
  home,
  homeAdmin,
  detail,
  login,
  loginfail,
  logout,
  profile,
  productAdd,
  register,
  registerfail
}
