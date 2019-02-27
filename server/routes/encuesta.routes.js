const express = require('express');
const router = express.Router();

const encuesta = require('../controllers/encuesta.controller');

router.get('/', encuesta.getEncuestas);
router.post('/', encuesta.createEncuesta);
router.get('/:id', encuesta.getEncuesta);
router.put('/:id', encuesta.editEncuesta);
router.delete('/:id', encuesta.deleteEncuesta);

module.exports = router;