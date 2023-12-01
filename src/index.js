const express = require('express')
const app = express();
//El servidor correra en este puerto
const port = 3001;

//Colocando los middlewares
app.use(express.json());
app.use(express.urlencoded({extended : false}));

//Rutas
app.use(require('./routes/paisesRouter'));
app.use(require('./routes/usuariosRouter'))

app.listen(port);
console.log('Servidor corriendo en el puerto', port);