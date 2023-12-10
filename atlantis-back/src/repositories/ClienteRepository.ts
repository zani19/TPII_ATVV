import Cliente from "../entities/Cliente";
import { AppDataSource } from "../db/data-source";
import {ICliente, ClienteComEndereco } from "../interfaces/iCliente";
import IEndereco from "../interfaces/iEndereco";
import Endereco from "../entities/Endereco";

const clienteRepository = AppDataSource.getRepository(Cliente);
const enderecoRepository = AppDataSource.getRepository(Endereco)

const getCliente = (): Promise<ICliente[]> => {
    return clienteRepository.find();
}

const postCliente = async (dataCliente: ICliente, dataEndereco: IEndereco): Promise<ClienteComEndereco> => {
    const newCliente = clienteRepository.create(dataCliente);
    const newEndereco = enderecoRepository.create(dataEndereco);

    try {
        newEndereco.cliente = newCliente; // Associando o cliente ao endereço

        const savedEndereco = await enderecoRepository.save(newEndereco); // Salvando o endereço com a associação ao cliente

        if (!savedEndereco) {
            throw new Error('Erro ao salvar o endereço');
        }

        newCliente.endereco = savedEndereco; // Associando o endereço salvo de volta ao cliente

        const savedCliente = await clienteRepository.save(newCliente); // Salvando o cliente com o endereço associado

        if (!savedCliente) {
            throw new Error('Erro ao salvar o cliente');
        }

        // Retornando os dados do cliente com o endereço associado
        const clienteComEndereco: ClienteComEndereco = {
            ...savedCliente,
            endereco: savedEndereco,
        };

        return clienteComEndereco;
    } catch (error:any) {
        throw new Error(`Erro ao cadastrar cliente: ${error.message}`);
    }
};

const getClienteByCpf = async (cpf: string): Promise<ICliente | undefined> => {
    const cliente = await clienteRepository.findOne({ where: { cpf } });
    return cliente || undefined; 
}

const getClienteById = async (id: string): Promise<ICliente | undefined> => {
    const cliente = await clienteRepository.findOne({ where: { id } });
    return cliente || undefined; 
}

const updateCliente = async (cliente: ICliente): Promise<ICliente | undefined> => {
    try {
        const { id, nome, nomeSocial, email, dnasc, cpf, rg, passaporte } = cliente;

        const existingCliente = await clienteRepository.findOne({ where: { id } });

        if (!existingCliente) {
            return undefined; // Retorna undefined se o cliente não for encontrado
        }

        existingCliente.nome = nome;
        existingCliente.nomeSocial = nomeSocial;
        existingCliente.email = email;
        existingCliente.dnasc = dnasc;
        existingCliente.cpf = cpf;
        existingCliente.rg = rg;
        existingCliente.passaporte = passaporte;

        await clienteRepository.save(existingCliente);
        return existingCliente;
    } catch (error) {
        throw new Error('Erro ao atualizar o cliente');
    }
}

const deleteCliente = async (clienteId: string): Promise<boolean> => {
    try {
        const deletedResult = await clienteRepository.delete({ id: clienteId });
        return deletedResult.affected !== null && deletedResult.affected !== undefined && deletedResult.affected > 0;
    } catch (error) {
        throw new Error('Erro ao deletar o cliente');
    }
};

export default { getCliente, postCliente, getClienteByCpf, updateCliente, deleteCliente };
