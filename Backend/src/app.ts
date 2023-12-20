/***************************************************************************************
 * Objetivo: Realizar um CRUD completo para cadastro de usuarios usando JWT e prismaORM.
 * Data: 19/12/2023
 * Autor: Gustavo Henrique
 * Versão: 1.0
 ***************************************************************************************/

/**************************************************************************
 * Express - depedencia do Node, que permite a integração entre o protocolo
 * http com o código.
 *          npm install express --save
 *          npm add -D  typescript @types/express ts-node-dev
 *          
 * Cors - Gerenciador de permições para protocolo HTTP :
 *          npm install cors --save
 *          npm add -D @types/cors
 * 
 * Body-parser - É uma dependencia que permite manipular dados pelo Body da
 * requisição
 *          npm install body-parser --save
 * 
 * Para iniciar as configurações do typescript
 * npx tsc --init
 *
 * 
 * Para relizar a conecção com o banco de dados iremos utilizar o Prisma
 *      npm install prisma --save
 *      npx prisma
 *      npx prisma init
 *      npm install @prisma/client 
 * 
 * Para autenticação dos endpoints:
 *      npm install jsonwebtoken
 *      npm install @types/jsonwebtoken
 * 
 * Para atualizar o prisma: 
 * npm i --save-dev prisma@latest                       │
│* npm i @prisma/client@latest
 **************************************************************************/

const express = require('express')

const port = process.env.PORT || 8080

const cors = require('cors')

import { server } from './server/server'

const app = express();

//Configuração do cors
const corsOptions = {
  origin: '*',
  methods: 'GET, POST, PUT, DELETE, OPTIONS, PATCH'
}

app.use(cors(corsOptions))
  
app.use(server)

app.listen(port, () => console.log('Servidor Aguardando requisições na porta 8080'))