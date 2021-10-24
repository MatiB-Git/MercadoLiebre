const path = require('path')
const multer =require('multer')
const {body} = require('express-validator');

module.exports = [

    body('foto').custom((value, {req}) =>{
        let file = req.file;
        let acceptedExtensions = ['.jpg', '.png'];

        if(!file){
            throw new Error('Tienes que subir una imagen');
        } else{
            let fileExtension = path.extname(file.originalname);                                                                                            
            if(!acceptedExtensions.includes(fileExtension)) {
                throw new Error(`Las extenciones del archivo permitidas son ${acceptedExtensions.join(', ')}`);
            }
        }

        return true;
    })

]