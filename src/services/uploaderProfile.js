import multer from 'multer';
import __dirname from '../utils.js';

const storage = multer.diskStorage({
  destination:function(req,file,cb){
    cb(null,__dirname+'/public/avatares')
  },
  filename:function(req,file,cb){
    cb(null,`${Date.now()}-${file.originalname}`)
  }
})

const uploaderProfile = multer({storage});
export default uploaderProfile