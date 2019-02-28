const Lineagrafica = require('../models/lineagrafica');
const lineagraficaCtrl = {};
 
lineagraficaCtrl.getLineagraficas = async (req, res) => {
    const lineagraficas = await Lineagrafica.find();
    res.json(lineagraficas);       
};

lineagraficaCtrl.createLineagrafica = async (req, res) => {
    const lineagrafica = new Lineagrafica({
        loli: req.body.loli,
        color: req.body.color,
        boy: req.body.boy,
        girl: req.body.girl,
        background: req.body.background
    });
    await lineagrafica.save();
    res.json({
        'status': 'Lineagrafica Saved'
    });
};

lineagraficaCtrl.getLineagrafica = async (req, res) => {
    const lineagrafica = await Lineagrafica.findById(req.params.id);
    res.json(lineagrafica);
}

lineagraficaCtrl.editLineagrafica = async (req, res) => {
    const { id } = req.params;
    const lineagrafica = {
        loli: req.body.loli,
        color: req.body.color,
        boy: req.body.boy,
        girl: req.body.girl,
        background: req.body.background
    };
    await Lineagrafica.findByIdAndUpdate(id, {$set: lineagrafica}, {new: true});
    res.json({
        status: 'Lineagrafica Updated'
    });
};

lineagraficaCtrl.deleteLineagrafica = async (req, res) => {
    await Lineagrafica.findByIdAndRemove(req.params.id);
    res.json({
        status: 'Lineagrafica Deleted'
    });
};

module.exports = lineagraficaCtrl;
