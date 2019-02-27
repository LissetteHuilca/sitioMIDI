const mongoose = require('mongoose');
const { Schema } = mongoose;

const LineagraficaSchema = new Schema({
    loli: { type: String, required: false},
    color: { type: String, required: false},
    boy: { type: String, required: false},
    girl: { type: String, required: false},
    background: { type: String, required: false}
});

module.exports = mongoose.model('Lineagrafica', LineagraficaSchema);