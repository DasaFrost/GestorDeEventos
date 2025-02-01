import { useEffect, useState } from "react";
import apiClient from "../api/axiosConfig";

const Eventos = () => {
  const [eventos, setEventos] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchEventos = async () => {
      try {
        const response = await apiClient.get("/eventos/");
        setEventos(response.data);
      } catch (err) {
        if(err.response){
            setError(err.response.data.mensaje || "Error al cargar los eventos")
            }else{
                setError("Error al conectar con el servidor")
            };
        }
      }
      fetchEventos();
    },[]);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Lista de Eventos</h1>
      {error && <p className="text-red-500">{error}</p>}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {eventos.map((evento) => (
          <div
            key={evento.id}
            className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition"
          >
            <h2 className="text-lg font-semibold">Nombre: {evento.nombreEvento}</h2>
            <p className="text-gray-600">Fecha: {evento.fechaEvento}</p>
            <p className="text-gray-600">horaEvento: {evento.horaEvento}</p>
            <p className="text-gray-600">ubicacion: {evento.ubicacion}</p>
            <p className="text-gray-600">descripcion: {evento.descripcion}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Eventos;
