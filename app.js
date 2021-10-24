const express = require('express');
const path = require('path');
const app = express();
const port = 3030;
const methodOverride = require('method-override');
const expressValidator = require('express-validator');


const indexRouter = require('./routes/indexRouter')
const usersRouter = require('./routes/usersRouter')


const publicFolderPath = path.resolve(__dirname, './public');
app.use(express.static(publicFolderPath));

/*LEVANTANDO SERVER */
app.listen(port, () => {
    console.log('Server activo')
});

/*CONFIGURNADO MOTOR DE PLANTILLAS*/
app.set('view engine', 'ejs');

/* RUTAS */
app.use('/', indexRouter)
app.use('/users', usersRouter)

/*MODULO QUE PERMITE USAR LOS METODOS POST,  PUT, DELETE */
app.use(methodOverride('_method'));

app.use(express.urlencoded({ extended: false }));