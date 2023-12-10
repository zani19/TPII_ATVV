import IEndereco from './iEndereco';

interface ICliente {
    id?: string;
    nome: string;
    nomeSocial: string;
    email: string;
    dnasc: string;
    cpf: string;
    rg: string;
    passaporte: string;
    endereco?: IEndereco;
}

interface ClienteComEndereco extends ICliente {
    endereco?: IEndereco;
}

export { ICliente, ClienteComEndereco };
