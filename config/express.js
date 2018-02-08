const express =  require('express');
const consign = require('consign');

module.exports = () => {
    const app = express();

    app.set('views', './app/views');
    app.set('view engine', 'ejs');

    app.use(express.static('./app/public'));

    consign()
        .include('app/models')
        .then('app/controllers')
        .then('app/routes')
        .into(app)
    ;

    return app;
}