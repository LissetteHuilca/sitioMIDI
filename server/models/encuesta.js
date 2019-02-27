const mongoose = require('mongoose');
const { Schema } = mongoose;

const EncuestaSchema = new Schema({
    user_id: { type: String, required: true},
    pregunta1: { type: String, required: true},
    pregunta2: { type: String, required: true},
    pregunta3: { type: String, required: true},
    pregunta4: { type: String, required: true},
    pregunta5: { type: String, required: true},
    pregunta6: { type: String, required: true},
    pregunta7: { type: String, required: true},
    pregunta8: { type: String, required: true},
    pregunta9: { type: String, required: false}
 
  
});

module.exports = mongoose.model('Encuesta', EncuestaSchema);