// Rota: Endereço completo da requisição
// Recurso: Qual entidade estamos acessando do sistema
// Request Param: Identificar um recurso (ex: id)
// Query param: filtros "opcionais", paginação (ex: users/0?search=on)

import express from 'express';
import cors from 'cors';
import path from 'path';
import routes from './routes'

const app = express();

app.use(cors());

app.use(express.json()); // "pluggin" para o express entender requisição em json

app.use(routes);

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));

app.listen(3333);