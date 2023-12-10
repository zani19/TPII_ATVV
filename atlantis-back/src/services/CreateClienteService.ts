import { Repository, getRepository } from 'typeorm';
import Cliente from '../entities/Cliente';

type ClienteRequest = {    
    nome: string;
    nomeSocial: string;
    email: string;
    dnasc: string;
    cpf: string;
    rg: string;
    passaporte: string;
};

export class CreateClienteService {
    private clienteRepository: Repository<Cliente>;

    constructor() {
        this.clienteRepository = getRepository(Cliente);
    }

    async execute({        
        nome,
        nomeSocial,
        email,
        dnasc,
        cpf,
        rg,
        passaporte,
    }: ClienteRequest): Promise<Cliente | Error> {
        const existingCliente = await this.clienteRepository.findOne({ where: { cpf } });

        if (existingCliente) {
            return new Error('CPF já cadastrado!');
        }

        const cliente = this.clienteRepository.create({           
            nome,
            nomeSocial,
            email,
            dnasc,
            cpf,
            rg,
            passaporte,
        });

        await this.clienteRepository.save(cliente);

        return cliente;
    }
}
