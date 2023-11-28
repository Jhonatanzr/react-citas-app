import {useState, useEffect} from 'react';
import Error from './Error';

const Formulario = ({pacientes, setPacientes, paciente, setPaciente}) => {
  const [nombre, setNombre] = useState('');
  const [propietario, setPropietario] = useState('');
  const [email, setEmail] = useState('');
  const [alta, setAlta] = useState('');
  const [sintomas, setSintomas] = useState('');

  const [error, setError] = useState(false);

  useEffect(() => {
    if( Object.keys(paciente).length > 0 ) {
      setNombre(paciente.nombre);
      setPropietario(paciente.propietario);
      setEmail(paciente.email);
      setAlta(paciente.alta);
      setSintomas(paciente.sintomas);
    }
  }, [paciente]);


  const generarId = () => {
    const random = Math.random().toString(36).substring(2);
    const fecha = Date.now().toString(36);

    return random + fecha;
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    //Validación del formulario

    if([nombre, propietario, email, alta, sintomas].includes('')) {
      setError(true);
      return;
    }

    setError(false);

    //Objeto Paciente

    const objectPaciente = {
      nombre,
      propietario,
      email,
      alta,
      sintomas
    }

    if (paciente.id) {
      //Editar Paciente
      objectPaciente.id = paciente.id;
      const pacientesActualizados = pacientes.map( pacienteState => 
        pacienteState.id === paciente.id ? objectPaciente : pacienteState  
      );

      setPacientes(pacientesActualizados);
      setPaciente('');
    } else {
      //Nuevo paciente
      objectPaciente.id = generarId();
      setPacientes([...pacientes, objectPaciente]);
    }

    limpiarFormulario();
  }

  const limpiarFormulario = () => {
    setNombre('');
    setPropietario('');
    setEmail('');
    setAlta('');
    setSintomas('');
  }

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5 mb-5">
      <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
      <p className="text-lg mt-5 text-center mb-10">
        Añade Pacientes y {''} 
        <span className="text-indigo-600 font-bold text-lg">Administralos</span>
      </p>

      <form onSubmit={handleSubmit} 
            className="bg-white shadow-md rounded-lg py-10 px-5">
        { error && <Error><p>Todos los campos son obligatorios</p></Error> }
        <div className="mb-5">
          <label className="block text-gray-700 uppercase font-bold" htmlFor="nombre">Nombre Mascotas</label>
          <input 
            id="nombre"
            type="text" 
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            placeholder="Nombre de la Mascota"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label className="block text-gray-700 uppercase font-bold" htmlFor="propietario">Nombre Propietario</label>
          <input 
            id="propietario"
            type="text" 
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            placeholder="Nombre del Propietario"
            value={propietario}
            onChange={(e) => setPropietario(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label className="block text-gray-700 uppercase font-bold" htmlFor="email">Email</label>
          <input 
            id="email"
            type="email" 
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            placeholder="Email Contacto del Propietario"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label className="block text-gray-700 uppercase font-bold" htmlFor="alta">Alta</label>
          <input 
            id="alta"
            type="date" 
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={alta}
            onChange={(e) => setAlta(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label className="block text-gray-700 uppercase font-bold" htmlFor="sintomas">Síntomas</label>
          <textarea
            id="sintomas"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            placeholder="Describe los Síntomas"
            value={sintomas}
            onChange={(e) => setSintomas(e.target.value)}
          />
        </div>

        <input 
          type="submit" 
          className="bg-indigo-600 w-full p-3 text-white cursor-pointer uppercase 
          font-bold hover:bg-indigo-700 transition-all mb-5 rounded-md"
          value={ paciente.id ? 'Editar Paciente' : 'Agregar Paciente' } 
        />
      </form>


    </div>
  )
}

export default Formulario;