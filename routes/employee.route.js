const controller = require('../controllers/employee.controller');
const express = require('express');
const router = express.Router();

const multer = require('multer');

const MIME_TYPE_MAP = {  
  'image/png': 'png',  
  'image/jpeg': 'jpg',  
  'image/jpg': 'jpg'  
};  

const storage = multer.diskStorage({
    destination:(req,file,cb) => {
        const isValid = MIME_TYPE_MAP[file.mimetype];  
        let error = new Error("Invalid Mime Type");  
        if(isValid){  
            error = null;  
        }  
        cb(error,"backend/images");
    },
    filename: (req, file, cb)=>{  
    const name = file.originalname.toLowerCase().split(' ').join('_');
    const ext = MIME_TYPE_MAP[file.mimetype];
    cb(null, name+ '-'+ Date.now()+ '.'+ ext);      
}  
})

router.post('/new',controller.create);

router.get('/getEmp',controller.getEmp);

router.get('/getOne/:id',controller.getOneEmp);

router.patch('/update/:id',controller.updateEmp);

router.delete('/deleteEmp/:id',controller.deleteEmp);

module.exports = router;