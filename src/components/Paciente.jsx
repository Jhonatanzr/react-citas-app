const Paciente = ({paciente, setPaciente, eliminarPaciente}) => {
  const {nombre, propietario, email, alta, sintomas, id} = paciente;

  const handleEliminarPaciente = () => {
    const respuesta = confirm(`Realmente deseas eliminar el paciente ${nombre}`);
    if(respuesta) {
      eliminarPaciente(id);
    }
  }
 
  return (
    <div className="mx-5 my-5 bg-white shadow-md px-5 py-10 rounded-lg">
        <p className="font-bold mb-3 text-gray-700 uppercase">
          Nombre: {''}
          <span className="font-normal normal-case">{nombre}</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">
          Propietario: {''}
          <span className="font-normal normal-case">{propietario}</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">
          Email: {''}
          <span className="font-normal normal-case">{email}</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">
          Fecha Alta: {''}
          <span className="font-normal normal-case">{alta}</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">
          Síntomas: {''}
          <span className="font-normal normal-case">
          {sintomas}
          </span>
        </p>

        <div className="flex gap-2 mt-8">
          <button
            type="button"
            className="bg-indigo-600 hover:bg-indigo-700 py-2 px-6 text-white 
            font-bold rounded-md uppercase transition-all"
            onClick={() => setPaciente(paciente)}
          >Editar</button>

          <button
            type="button"
            className="bg-red-600 hover:bg-red-700 py-2 px-6 text-white 
            font-bold rounded-md uppercase transition-all"
            onClick={handleEliminarPaciente}
          >Eliminar</button>
        </div>

      </div>
  )
}

export default Paciente;
