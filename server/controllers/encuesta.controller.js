const Encuesta = require('../models/encuesta');
const encuestaCtrl = {};
 
encuestaCtrl.getEncuestas = async (req, res) => {
    const encuestas = await Encuesta.find();
    res.json(encuestas);       
};

encuestaCtrl.createEncuesta = async (req, res) => {
    const encuesta = new Encuesta({
        user_id:req.body.user_id,
        pregunta1: req.body.pregunta1,
        pregunta2: req.body.pregunta2,
        pregunta3: req.body.pregunta3,
        pregunta4: req.body.pregunta4,
        pregunta5: req.body.pregunta5,
        pregunta6: req.body.pregunta6,
        pregunta7: req.body.pregunta7,
        pregunta8: req.body.pregunta8,
        pregunta9: req.body.pregunta9

      
    });
    await encuesta.save();
    res.json({
        'status': 'Encuesta Saved'
    });
};

encuestaCtrl.getEncuesta = async (req, res) => {
    const encuesta = await Encuesta.findById(req.params.id);
    res.json(encuesta);
}

encuestaCtrl.editEncuesta = async (req, res) => {
    const { id } = req.params;
    const encuesta = {
        user_id:req.body.user_id,
        pregunta1: req.body.pregunta1,
        pregunta2: req.body.pregunta2,
        pregunta3: req.body.pregunta3,
        pregunta4: req.body.pregunta4,
        pregunta5: req.body.pregunta5,
        pregunta6: req.body.pregunta6,
        pregunta7: req.body.pregunta7,
        pregunta8: req.body.pregunta8,
        pregunta9: req.body.pregunta9 
    };
    await Encuesta.findByIdAndUpdate(id, {$set: encuesta}, {new: true});
    res.json({
        status: 'Encuesta Updated'
    });
};

encuestaCtrl.deleteEncuesta = async (req, res) => {
    await Encuesta.findByIdAndRemove(req.params.id);
    res.json({
        status: 'Encuesta Deleted'
    });
};

module.exports = encuestaCtrl;
