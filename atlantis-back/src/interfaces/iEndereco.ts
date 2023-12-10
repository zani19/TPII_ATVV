import {ICliente} from "./iCliente";

interface IEndereco {
    id?: string;
    logradouro: string;
    numero: string;
    complemento?: string;
    bairro: string;
    cidade: string;
    estado: string;
    cep: string;
    cliente?: ICliente;
  }
  
  export default IEndereco;
  