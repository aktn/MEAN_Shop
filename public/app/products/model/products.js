var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var productSchema = new Schema({
    title       : { type: String, required: true, trim:true},
    price       : { type: Number, required: true},
    stock       : { type: Number, default: 1},
    description : String,
    imageBin    : { data: Buffer, contentType: String},
    imageUrl    : String
});

module.exports = mongoose.model('Product',productSchema);