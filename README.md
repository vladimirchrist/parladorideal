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
$ yarn

# Crie uma instancia do postgres utilizando o docker
$ docker run --name parlador-postgres -e POSTGRES_USER=postgres \
              -e POSTGRES_DB=parlador -e POSTGRES_PASSWORD=root \
              -p 5432:5432 -d postgres

# Certifique-se de que a instancia do banco de dados está executando
$ docker ps -a

# Execute as migrations para criar as tabelas
$ yarn typeorm migration:run

# Execute as migrations para popular o banco
$ yarn typeorm migration:run -c seed

# Execute a API, o serviço inicializará na porta 3333
$ yarn dev

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


### Instruções para rodar o projeto
Instale o aplicativo Expo em seu dispositivo móvel - > [Google Play](https://play.google.com/store/apps/details?id=host.exp.exponent)  | [App Store](https://itunes.apple.com/app/apple-store/id982107779?pt=17102800&amp;ct=www&amp;mt=8)

```bash
# Instale as dependecias
$ npm install

# Execute a aplicaçao
$ npm start

```

> Obs.: Atualize o endereço em que na API está executando no arquivo /src/services/api.ts

