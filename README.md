# API

## Sobre
Ferramenta de “microblogging”, onde colaboradores podem publicar posts de até 280 caracteres para que possam compartilhar atualizações pessoais e de projetos, ideias e curiosidades sobre liberalismo econômico!


## Tecnologias

Tecnologias utilizadas para o desenvolvimento da API.

- [Node.js](https://nodejs.org/en/)
- [TypeScript](https://www.typescriptlang.org/)
- [Express](https://expressjs.com/pt-br/)
- [TypeORM](https://typeorm.io/#/)
- [PostgreSQL](https://www.postgresql.org/)
- [Docker](https://www.docker.com/)


### Requisitos

- [Node.js](https://nodejs.org/en/)
- [Yarn](https://classic.yarnpkg.com/) or [npm](https://www.npmjs.com/)
- Uma instancia do [PostgreSQL](https://www.postgresql.org/)

> Obs.: É recomendável utilizar o docker na instanciação do PostgreSQL

**Clone o projeto e navegue até a pasta backend**

```bash
$ git clone https://github.com/vladimirchrist/parladorideal.git && cd parladorideal/backend
```

**Siga os passos abaixo**

```bash
# Instale as dependecias
$ npm install

# Crie uma instancia do postgres utilizando o docker
$ docker run --name parlador-postgres -e POSTGRES_USER=postgres \
              -e POSTGRES_DB=parlador -e POSTGRES_PASSWORD=root \
              -p 5432:5432 -d postgres

# Certifique-se de que a instancia do banco de dados está executando
$ docker ps -a

# execute as migrations
$ npm rum typeorm migration:run

# Execute a API, o serviço inicializará na porta 3333
$ npm run dev

```
# Mobile

## Tecnologias

Tecnologias utilizadas para o desenvolvimento do cliente mobile.

- [ReactJS](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [React Native](https://reactnative.dev/)
- [React Navigation](https://reactnavigation.org/)
- [Styled Components](https://styled-components.com/)
- [Axios](https://github.com/axios/axios)

### Requisitos

- É necessário que a API esteja executando.

Navegue até a pasta mobile.

**Siga os passos abaixo**

```bash
# Instale as dependecias
$ npm install

# Execute a API, o serviço inicializará na porta 3333
$ npm start

```

> Obs.: Atualize o endereço em que na API está executando no arquivo /src/services/api.ts

