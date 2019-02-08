import {PersonaInterface} from "./persona-interface";

export interface ConsumidorInterface {
  id: string | number;
  fechaNacimiento: string;
  username: string;
  password: string;
  idPersona: number | string | PersonaInterface ;
}
