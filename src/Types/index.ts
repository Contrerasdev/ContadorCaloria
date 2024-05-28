//Creando el tipado para los datos de categories.

export type Category = {
  id: number;
  name: string;
};
// === Creando tipado para las actividades.

export type Activity = {
  category: number,
  actividad: string,
  calorias: number
}
