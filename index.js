const express = require('express');
const PORT = 8000;
const app = express();
const db = require('./config/mongoose');



 



app.use(express.urlencoded());

app.use(express.static('./assets'));

// setting up a  view engine
app.set('view engine', 'ejs');
app.set('views', './views');



// Setting up the router
app.use('/', require('./routs'));

app.listen(PORT, (error) => {
    if(error) console.log(`Error in shotting up the server ${error}`);

    console.log(`Server is up and running on PORT: ${PORT}`);
})



