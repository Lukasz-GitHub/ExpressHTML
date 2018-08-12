var express = require('express');
var app = express();
app.use(express.static('views'));
app.set('view engine', 'pug');
app.set('views', './views');

app.get('/', function(req, res) {
    res.render('html-template');
});

app.get('/Login_Site', function(req, res) {
    res.render('login-site', {
        email: req.query.email,
        password: req.query.password
    });
});

app.use(function(req, res, next) {
    res.status(404).send('Błąd żądania!')
})

app.listen(3000);
