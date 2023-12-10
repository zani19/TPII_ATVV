const mysql = require('mysql2/promise');

const createDatabase = async () => {
  const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
  });

  await connection.query('CREATE DATABASE IF NOT EXISTS atlantis');

  console.log('Banco de Dados criado com sucesso');

  await connection.end();
};

export default createDatabase;
