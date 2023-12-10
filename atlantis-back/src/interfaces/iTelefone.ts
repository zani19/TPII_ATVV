import ICliente from "./iCliente";


interface ITelefone {
    id?: string;
    tipo: 'residencial' | 'comercial' | 'celular';
    ddd: string;
    numero: string;
    cliente: ICliente;
  }

  export default ITelefone;
  