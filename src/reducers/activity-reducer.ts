import { Activity } from "../Types";

// === Almacenar las acciones de las actividades ===
export type ActivityActions =
    {type:"save-activity"; payload: { newActivity: Activity }} |
    {type:"set-activeId"; payload: { id: Activity['id'] } } |
    {type:"delete-activity"; payload:{id: Activity['id']} }

// === State Activity ===
export type ActivityState = {
  activities: Activity[];
  activeId : Activity['id'];
};
// === State initial ===
export const initialState: ActivityState = {
  activities: [],
  activeId : ''
};
// === Reducer ===
export const activityReducer = (state: ActivityState = initialState, action: ActivityActions) => {
  // == Ejecutar la accion save-actvivity ===  
  if (action.type === "save-activity") {
    // Manejar la logica para actualizar el state    
    let updateActividad:Activity[] = [] //Generar un state vacio
    if(state.activeId){ 
        updateActividad = state.activities.map(activ => activ.id === state.activeId ? action.payload.newActivity : activ);
    }else{
        updateActividad=[...state.activities, action.payload.newActivity]
    }
    return {
      ...state,
      activities:updateActividad,
      activeId:'' //Reiniciar al guardar registro
    };
  }
  // == Ejecutar la accion set-activedid ===
  if(action.type === "set-activeId"){
    return{
        ...state,
        activeId:action.payload.id               
    }
  }  
  // === Delete una actividad ==
  if(action.type === "delete-activity"){   
        return{
            ...state,
           activities:state.activities.filter((actividad) => actividad.id !== action.payload.id )
            
        }
  }

};
