import { Request, Response, Router } from 'express';
import ClienteRepository from '../repositories/ClienteRepository';
import {ICliente} from '../interfaces/iCliente';
import IEndereco from '../interfaces/iEndereco';

const clienteRouter = Router();

clienteRouter.get('/', async (_req: Request, res: Response): Promise<Response> => {
    try {
        const clientes = await ClienteRepository.getCliente();
        return res.status(200).json(clientes);
    } catch (error) {
        return res.status(500).json({ message: 'Erro ao obter clientes', error });
    }
});

clienteRouter.post('/cadastrar', async (req: Request, res: Response): Promise<Response> => {
    try {
        const { nome, nomeSocial, email, dnasc, cpf, rg, passaporte } = req.body as ICliente;

        const { endereco } = req.body;
        if (!endereco) {
            return res.status(400).json({ message: 'Endereço é obrigatório.' });
        }

        const { cep, logradouro, numero, complemento, bairro, cidade, estado } = endereco as IEndereco;
        const newEndereco: IEndereco = { cep, logradouro, numero, complemento, bairro, cidade, estado };

        const newClienteData: ICliente = { nome, nomeSocial, email, dnasc, cpf, rg, passaporte };
        newClienteData.endereco = newEndereco;

        const clienteSalvo = await ClienteRepository.postCliente(newClienteData, newEndereco);
        return res.status(201).json(clienteSalvo);
    } catch (error: any) {
        console.error('Erro ao cadastrar cliente:', error);
        return res.status(500).json({ message: 'Erro ao cadastrar cliente', error: error.message });
    }
});




clienteRouter.put('/atualizar/:id', async (req: Request, res: Response): Promise<Response> => {
    try {
        const clienteId = req.params.id;
        const { nome, nomeSocial, email, dnasc, cpf, rg, passaporte } = req.body as ICliente;

        const clienteToUpdate: ICliente = {
            id: clienteId,
            nome,
            nomeSocial,
            email,
            dnasc,
            cpf,
            rg,
            passaporte
        };

        const updatedCliente = await ClienteRepository.updateCliente(clienteToUpdate);

        if (!updatedCliente) {
            return res.status(404).json({ message: 'Cliente não encontrado.' });
        }

        return res.status(200).json(updatedCliente);
    } catch (error) {
        return res.status(500).json({ message: 'Erro ao atualizar cliente', error});
    }
});

clienteRouter.delete('/excluir/:id', async (req: Request, res: Response): Promise<Response> => {
    try {
        const clienteId = req.params.id;

        const deletedCliente = await ClienteRepository.deleteCliente(clienteId);

        if (!deletedCliente) {
            return res.status(404).json({ message: 'Cliente não encontrado.' });
        }

        return res.status(200).json({ message: 'Cliente removido com sucesso.' });
    } catch (error) {
        return res.status(500).json({ message: 'Erro ao remover cliente', error });
    }
});

export default clienteRouter;
function postCliente(newClienteData: ICliente, newEndereco: IEndereco) {
    throw new Error('Function not implemented.');
}

