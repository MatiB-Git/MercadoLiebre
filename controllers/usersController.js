const {validationResult} = require('express-validator')

module.exports = {
    login: (req, res) => {
        res.render('login');
    },
    
    register: (req, res) => {
        res.render('register')
    },

    processRegister: (req, res) => {   

        /*VALIDACION DEL REGISTRO */
       const resultValidation = validationResult(req);

       if(resultValidation.errors.length > 0) {
           return res.render('register', {
               errors: resultValidation.mapped(),
               old: req.body
            
           })
       }

       return res.rendirect('home')
    },

    profile: (req, res) => {
        res.render('profile')
    }


}