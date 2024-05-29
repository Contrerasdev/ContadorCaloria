
import { Activity } from "../Types";

type listadosProps = {
    activities: Activity[];
}
const Listados = ({ activities }: listadosProps) => {
    console.log(activities);
    return (
        <>
            <div className="bg-white my-2 px-2 rounded-lg">
                <h3 className="text-center text-2xl">Comida y Actividades</h3>
                <div className="py-1 px-1">
                    <p className="text-center">Comida</p>
                    <div className="flex justify-between items-center bg-slate-300 p-1">
                        <p>Corriendo</p>
                        <p>1200 Calorias</p>
                        <div className="flex justify-around w-1/6">
                            <button className="bg-green-800 p-1 rounded-sm text-white hover:bg-green-900 transition-all">Editar</button>
                            <button className="bg-red-500 p-1 text-white hover:bg-red-900 transition-all">Eliminar</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Listados