import {ConsumidorInterface} from "./consumidor-interface";
import {DepartamentoInterface} from "./departamento-interface";

export interface ConsumidorDepartamentoInterface {
  id: number | string;
  habilitarDepartamento: boolean;
  idConsumidor: number | string | ConsumidorInterface
  idDepartamento: number | string | DepartamentoInterface
}
