//Importando los datos
import {useState, Dispatch, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';
import categories from "../data/categories";
import { Activity } from "../Types";
import { ActivityActions, ActivityState } from "../reducers/activity-reducer";


//== Creando un type para la funcion dispatch ===
type FormProps = {
  dispatch: Dispatch<ActivityActions>,
  state:ActivityState
}

const initialState: Activity = {
  id: uuidv4(),
  category: 1,
  actividad: '',
  calorias: 0
}
const Form = ({ dispatch, state }: FormProps) => {
  const [activity, setActivity] = useState<Activity>(initialState);

  // === Verificar si el form tiene un ID para editar ===
  useEffect(() =>{    
      if(state.activeId){        
        //se usa el sate.activities de activity-reducer y se compara con el state.activedId del state
        const itemSelect = state.activities.filter(stateActivity => stateActivity.id === state.activeId);
        //actualizar el estado
        setActivity(itemSelect[0]);        
      }    
  }, [state.activeId]);

  //=== Capturar evento de los inputs ===
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement> | React.ChangeEvent<HTMLInputElement>) => {
    // === Validar si es numero ===
    const isNumber = ['category', 'calorias'].includes(e.target.name);
    //const { name, value } = e.target;
    setActivity({
      ...activity,
      [e.target.name]: isNumber ? +e.target.value : e.target.value
    });
  };
  // === Mostrar texto del button ===
  const textButton = () => {
    const { category } = activity;
    if (category === 1) {
      return category;
    }
  }
  // === validar y activar el button ===
  const validado = () => {
    const { actividad, calorias } = activity;
    return actividad.trim() !== '' && calorias > 0;
  }
  //=== HandleSubmit
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();    
    dispatch({ type: 'save-activity', payload: { newActivity: activity } });
    // Reinicar Form
    setActivity({
      ...initialState,
      id: uuidv4()
    });
  }
  return (
    <>
      <form action="" className="space-y-2 bg-white shadow p-10 rounded-lg w-lg" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-3">
          <label htmlFor="category">Categoía:</label>
          <select
            className="border border-blue-300 p-2 rounded-lg w-full bg-white"
            id="category"
            name="category"
            value={activity.category}
            onChange={handleChange}
          >
            {categories.map((cate) => (
              <option key={cate.id} value={cate.id}>
                {cate.name}
              </option>
            ))}
          </select>
          <label htmlFor="name">Actividad:</label>
          <input
            type="text"
            className="border border-blue-300 p-2 rounded-lg w-full bg-white"
            id="name"
            name="actividad"
            placeholder="Ej. Comida, Jugo de Naranja, Ejercicios, pesas, correr, caminar, bisicleta etc"
            onChange={handleChange}
            value={activity.actividad}
          />
          <label htmlFor="calorias">Calorias:</label>
          <input
            type="number"
            className="border border-blue-300 p-2 rounded-lg w-full bg-white"
            id="calorias"
            name="calorias"
            placeholder="Ej, 200, 400, 500"
            onChange={handleChange}
            value={activity.calorias}
          />
          <input
            type="submit"
            className="bg-black text-white py-1 rounded-md hover:bg-slate-800 cursor-pointer uppercase disabled:opacity-20"
            value={textButton() ? 'Guardar Comida' : 'Guardar Ejercicios'}
            disabled={!validado()}
          />
        </div>
      </form>
    </>
  );
};

export default Form;
