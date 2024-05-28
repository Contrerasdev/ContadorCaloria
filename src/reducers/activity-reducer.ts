import { Activity } from "../Types"

// === Almacenar las actividades ===
export type ActivityActions = {
    type: 'save-activity',
    payload: { newActivity: Activity }
}

// === State Activity ===
type ActivityState = {
    activities: Activity[];
}

// === State initial ===
export const initialState: ActivityState = {
    activities: []
}

// === Reducer ===
export const activityReducer = (
    state: ActivityState = initialState,
    action: ActivityActions
) => {
    if(action.type === 'save-activity'){
        // Manejar la logica para actualizar el satate
        return{
            ...state,
            activities:[...state.activities, action.payload.newActivity]
        }
    }
}