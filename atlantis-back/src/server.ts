import 'reflect-metadata';
import express from 'express';
import cors from 'cors';
import { AppDataSource } from './db/data-source';
import { routes } from './routes/routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

const startServer = async () => {
  try {
    await AppDataSource.initialize();
    console.log('Banco de Dados criado com sucesso');

    const PORT = 5000;
    app.listen(PORT, () => {
      console.log(`Servidor inicializado na porta ${PORT}`);
    });
  } catch (error) {
    console.error('Erro ao iniciar o servidor:', error);
  }
};

startServer();
