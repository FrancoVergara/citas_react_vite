import Paciente from "./Paciente";

const ListadoPacientes = ({pacientes, setPaciente, eliminarPaciente}) => {

    return ( 
        <div className="md:w-1/2 lg:w-3/5">
            <h2 className="font-black text-3xl text-center">
                Listado Pacientes
            </h2>

            { pacientes && pacientes.length ? (
                <>
                    <p className="text-lg mt-5 text-center mb-10">
                        Administra tus {""}
                        <span className="text-indigo-600 font-bold">
                            Pacientes y Citas
                        </span>
                    </p>

                    <div className="md:h-screen md:overflow-y-scroll">
                        {pacientes.map( paciente => (
                            <Paciente
                                key={paciente.id}
                                paciente={paciente}
                                setPaciente={setPaciente}
                                eliminarPaciente={eliminarPaciente}
                            />
                        ))}
                    </div>
                </>
            ) : (
                <>
                    <p className="text-lg mt-5 text-center mb-10">
                        Comienza agregando pacientes y {""}
                        <span className="text-indigo-600 font-bold">
                            apareceran en este lugar
                        </span>
                    </p>
                </>
            ) }
        </div>
    );
}
 
export default ListadoPacientes;