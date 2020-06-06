import knex from 'knex'; // comunicação universal com db variados usando js
import path from 'path';

const connection = knex({
  client: 'sqlite3',
  connection: {
    filename: path.resolve(__dirname, 'database.sqlite') // padronização do path    
  },
  useNullAsDefault: true,
});

export default connection;

// Migrations = histórico do banco de dados
