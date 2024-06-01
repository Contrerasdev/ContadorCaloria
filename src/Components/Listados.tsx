import { act, useMemo } from "react";
import { Activity, Category } from "../Types";
import categories from "../data/categories";
type listadosProps = {
  activities: Activity[];
};
const Listados = ({ activities }: listadosProps) => {

  const categoryName = useMemo(() => (id:Activity['category']) => categories.map( cat => cat.id === id ? cat.name : '' ), [activities]);
  return (
    <>
      <div className="bg-white my-2 px-2 rounded-lg">
        <h3 className="text-center text-2xl">Comida y Actividades</h3>
        {activities.map((acti) => (
          <div key={acti.id} className="py-1 px-1">
            <p
              className={`text-center uppercase rounded-md text-white ${
                acti.category === 1 ? "bg-red-500" : " bg-green-500"
              } `}
            >
              {categoryName(acti.category)}
            </p>
            <div className="flex justify-between items-center p-1 border-b-2">
              <div className="flex justify-between w-1/2">
                <p>{acti.actividad}</p>
                <p>{acti.calorias}</p>
              </div>
              <div className="flex gap-2">
                <button className="mx-1 bg-green-800 p-1 rounded-md text-white hover:bg-green-900 transition-all">
                  Editar
                </button>
                <button className="mx-1 bg-red-700 p-1 rounded-md text-white hover:bg-red-900 transition-all">
                  Eliminar
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Listados;
