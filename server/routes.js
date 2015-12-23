var path = require('path');

module.exports = function(app) {

    app.use('/api/products', require('./api/product'));
   // app.use('/auth', require('./auth'));


    app.get('*', function (req, res) {
        res.sendFile(path.join(__dirname + '/public/app/views/index.html'));
    });

};