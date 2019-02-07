import {ConsumidorInterface} from "./consumidor-interface";
import {DepartamentoInterface} from "./departamento-interface";

export interface AccesoInterface {
  id: number|string;
  codigoAcceso: string;
  idConsumidor: number | string | ConsumidorInterface;
  idDepartamento: number | string | DepartamentoInterface;
}
