const express = require('express');
const router = express.Router();

const lineagrafica = require('../controllers/lineagrafica.controller');

router.get('/', lineagrafica.getLineagraficas);
router.post('/', lineagrafica.createLineagrafica);
router.get('/:id', lineagrafica.getLineagrafica);
router.put('/:id', lineagrafica.editLineagrafica);
router.delete('/:id', lineagrafica.deleteLineagrafica);

module.exports = router;