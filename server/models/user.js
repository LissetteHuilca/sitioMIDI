const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
    roles: { type: String, required: true},
    name: { type: String, required: true},
    lastname: { type: String, required: true},
    email: { type: String, required: true},
    password: { type: String, required: true},
    estadolineagrafica: { type: String, required: false},
    restaurar: { type: Boolean, required: false},
    codigo: { type: String, required: false},
});

module.exports = mongoose.model('User', UserSchema);