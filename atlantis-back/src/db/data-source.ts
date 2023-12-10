import { CreateClientesTable1234567890123 } from './migrations/1701977062426-CreateUsersTable';
import { DataSource } from 'typeorm';
import Cliente from '../entities/Cliente';
import { CreateEnderecoTable1701992187178 } from './migrations/1701992187178-CreateEnderecoTable';
import Endereco from '../entities/Endereco';
import { CreateTelefoneTable1701993333117 } from './migrations/1701993333117-CreateTelefoneTable';
import Telefone from '../entities/Telefone';

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "root",
    database: "atlantis",
    synchronize: true,
    logging: false,
    entities: [Cliente, Endereco, Telefone],
    migrations: [CreateClientesTable1234567890123, CreateEnderecoTable1701992187178, CreateTelefoneTable1701993333117],
    subscribers: [],
})
