const Eventos = require('../Models/eventos');

exports.crearEvento = async (req, res) => {
    try {
        const nuevoEvento = new Eventos(req.body);
        await nuevoEvento.save();
        res.status(201).json(nuevoEvento);
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al crear el evento', error: error.message });
    }
};

exports.filtrarEventoFecha = async (req, res)=>{
    try{
        const {fechaInicio, fechaFinal}= req.params;
        const inicio= new Date(fechaInicio)
        const fin= new Date (fechaFinal )
        if (isNaN(inicio) || isNaN(fin)){
            return res.status(400).json(400).json({ error: 'fechas invalidas. Use el formato YYYY-MM-DD'})
        }
        const filtrarFecha= await Eventos.find({fechaEvento:{
            $gte: inicio,
            $lte: fin
        }, })
        res.status(200).json(filtrarFecha);
    }catch(error){
        res.status(500).json({mensaje: 'Error al filtrar el evento por fecha', error:error.message})
    }
}


exports.obtenerEventos = async (req, res) => {
    try {
        const eventos = await Eventos.find();
        res.status(200).json(eventos);
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al obtener los eventos', error: error.message });
    }
};

exports.actualizarEventos = async (req, res) => {
    try {
        const eventoActualizado = await Eventos.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(eventoActualizado);
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al actualizar el evento', error: error.message });
    }
};

exports.eliminarEvento = async (req, res) => {
    try {
        await Eventos.findByIdAndDelete(req.params.id);
        res.status(200).json({ mensaje: 'Evento eliminado correctamente' });
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al eliminar el evento', error: error.message });
    }
};