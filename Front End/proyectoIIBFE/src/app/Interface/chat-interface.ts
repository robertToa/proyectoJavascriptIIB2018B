import {ConsumidorInterface} from "./consumidor-interface";
import {ComunidadInterface} from "./comunidad-interface";

export interface ChatInterface {
  id: number | string;
  mensajeChat: string;
  idConsumidor:  ConsumidorInterface;
  idComunidad: ComunidadInterface;
}
