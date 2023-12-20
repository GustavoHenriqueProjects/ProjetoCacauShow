﻿# Projeto Alphacode 2023

## Instalação

1. Utilize o Node versão: v18.16.0
2. Utilize Mysql versão: 5.x ou superior
3. Clone ou Fork o seguinte repositório: https://github.com/GustavoHenriqueProjects/ProjetoCacauShow.git

## Configuração do banco de dados

1. Crie o banco de dados com o comando: CREATE DATABASE db_register_cacaushow;

2. Selecione o banco de dados executando o comando: USE db_register_alphacode;

4. Na pasta Backend execute o comando que instala todas as dependencias: npm i

5. Na pasta Backend execute o comando : npx prisma migrate dev . Esse comando cria as tabelas com as relações.

6. Utilizando o workbench execute o sequinte comando:
```sql
INSERT IGNORE INTO tbl_tipo_usuario (tipo) VALUES ('ADMINISTRADOR'), ('USUARIO');
```

## Para inicializar o Projeto
1. Na pasta Backend acesse o arquivo env. e mude o username e a password que são os acessos do seu banco.

2. Na pasta raiz do projeto Backend execute o seguinte comando para iniciar o serviço: npm run dev.

3. Após isso acesse a pasta Frontend e abra o arquivo index.html com o liveserver.

### Login de usuario
![Login](./Frontend/img/login.png)

### Cadastro de usuario
![Cadastro](./Frontend/img/cadastro.png)

### Atualização ou exclusão 
![Crud](./Frontend/img/update.png)



