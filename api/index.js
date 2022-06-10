import express from 'express'
import cors from 'cors'
import 'dotenv/config'

import reservaController from './src/controller/reservaController.js'
import funcionarioController from './src/controller/funcionarioController.js'

const server = express();
server.use(cors());
server.use(express.json());



//Endpoits Config
server.use(reservaController);
server.use(funcionarioController);

server.listen (process.env.PORT, () => console.log(`API online na porta ${process.env.PORT}`))