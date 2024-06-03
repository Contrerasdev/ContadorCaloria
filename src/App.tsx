//Importar el userRducer
import { useMemo, useReducer } from "react";
import { activityReducer, initialState } from "./reducers/activity-reducer";
import Listados from "./Components/Listados";

import Form from "./Components/Form";
function App() {
  const [state, dispatch] = useReducer(activityReducer, initialState);
  const reiniciarApp = state.activities.length > 0; //Verificar si existen actividades, para actiar el btn reset app
  
  console.log(reiniciarApp);
  return (
    <>
      <header className="bg-blue-900 py-3">
        <div className="max-w-4xl mx-auto flex justify-between text-ms px-2 ">
          <h1 className="text-center text-lg font-bold text-white uppercase">
            Contador de calorias
          </h1>
          <button className="text-white text-xs font-bold bg-red-700 p-1.5 rounded-md uppercase hover:bg-red-900 transition-all disabled:opacity-20"
          disabled={!reiniciarApp}
          onClick={() => dispatch({type:"reset-app"})}
          >
            Reiniciar App
          </button>
        </div>
      </header>
      <section className="bg-gray-300 py-20 px-2 md:px-5">
        <div className=" max-w-4xl mx-auto">
          <p className="text-center text-2xl font-bold uppercase py-1">Formulario</p>
        </div>
        <Form
          dispatch={dispatch}
          state={state}
        />
        <Listados
          activities={state.activities}
          dispatch={dispatch}
        />
      </section>
    </>
  );
}

export default App;
