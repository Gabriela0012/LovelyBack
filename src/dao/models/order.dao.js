import mongoose from 'mongoose';
import moment from 'moment'

const collection = 'orders';

const schema = mongoose.Schema({
  email:{
    type: 'string',
    required:true
  },
  items: [
    {
      _id: false,
      id: String,
      qty: Number,
    }
  ],
  timestamp:{
    type: String,
    default: ()=>moment().format('dddd, MMMM Do YYYY, h:mm:ss a'),
  }
})


const orderModel = mongoose.model(collection,schema);


export default orderModel;