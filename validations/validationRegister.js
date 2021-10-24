const {body} = require('express-validator');

module.exports = [

    body('fullname').notEmpty().withMessage('Tenes que escribir tu nombre y apellido'),
    body('username').notEmpty().withMessage('Tenes que escribir tu nombre de usuario'),
    body('datebirth').notEmpty().withMessage('Tenes que introducir tu fecha de nacimiento'),
    body('domicilio').notEmpty().withMessage('Tenes que escribir tu domicilio'),
    body('intereses').notEmpty().withMessage('Tenes que elegir tus intereses'),
    body('password').notEmpty().withMessage('Tenes que introducir la contraseña'),
    body('password2').notEmpty().withMessage('Tenes que repetir la contraseña'),
    body('perfil').notEmpty().withMessage('Marca una opcion'),

   
]