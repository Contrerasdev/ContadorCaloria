//Importando los datos
import { useState } from "react";
import categories from "../data/categories";

const Form = () => {
  const [activity, setActivity] = useState({
    category: "",
    actividad: "",
    calorias: 0,
  });
  console.log(activity);
  //=== Capturar evento de los inputs ===
  const handleChange = (e) => {  
    const {name, value} = e.target;
    setActivity({
      ...activity, [name] : value
  });
    console.log(activity);
  };

  return (
    <>
      <form action="" className="space-y-2 bg-white shadow p-10 rounded-lg">
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
            className="bg-black text-white py-1 rounded-md hover:bg-slate-800 cursor-pointer uppercase"
            value="Guardar"
          />
          <></>
        </div>
      </form>
    </>
  );
};

export default Form;
