/** 
    Vamos a instalar las siguientes dependencias:
        npm install express mysql
        npm install cors
 */

const express = require('express');
const app = express();
const cors = require('cors');
//Setings
app.set('port', process.env.PORT || 3000);

//Middlewares
app.use(express.json());
app.use(cors());

//Routes
app.use(require('./routes/usuarios.js'));

// Starting the server
app.listen(app.get('port'),() => {
    console.log('Server on port', app.get('port'));
});