require('dotenv').config();

const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const mainRoute = require('./server/routes/index');

const app = express();

const port = 5000|| process.env.PORT;

app.use(express.urlencoded({extended:true}));
app.use(express.json());

//static files

app.use(express.static('public'));

//Templating engine
app.use(expressLayouts);
app.set('layout','./layouts/main' );
app.set('view engine','ejs' );


app.use('/', mainRoute);


app.listen(port,()=>{
  console.log(`App listenimg on port ${port}`);
});