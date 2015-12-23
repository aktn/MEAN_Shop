var express = require('express');
var controller = require('./product.controller');
var multiparty = require('multiparty');
var uploadOptions = { autoFile: true, uploadDir: 'client/assets/uploads/'}

var router = express.Router();

router.get('/', controller.index);
router.get('/:id', controller.show);

//router.post('/:id/upload', multiparty(uploadOptions), controller.upload);
router.post('/', controller.create);
router.put('/:id', controller.update);
router.delete('/:id', controller.destroy);


module.exports = router;