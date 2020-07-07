const express = require('express')
var hbs = require('hbs');
require('./hbs/helpers/helpers');
const app = express()

app.use(express.static(__dirname + '/public'));

//Express BHS
hbs.registerPartials(__dirname + '/views/partials', function(err) {});
app.set('view engine', 'hbs');

const port = process.env.PORT || 3000;


app.get('/', (req, res) => {

    res.render('home', {

    });
})

app.get('/about', (req, res) => {

    res.render('about', {

    });
})



app.listen(port, () => {
    console.log(`Se levanto el servicio en el puerto ${port}`);
});