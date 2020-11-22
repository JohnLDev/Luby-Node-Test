<h1 align="center" >

  Luby teste desenvolvedor node
</h1>

<p align="center">Teste proposto pela empresa LubySoftware</p>




---

## 💡 Sobre

O teste proposto pela Luby era realizar o desenvolvimento de uma api semelhante a do github com as devidas especificações da empresa.

---



## 👌 Funcionalidades



## ER Diagram
<img alt="er" title="Er" src="./images/er.png" />

<br>

---

## 👁‍🗨 Insomnia


[![Run in Insomnia}](https://insomnia.rest/images/run.svg)](https://insomnia.rest/run/?label=Luby-Back-end-Test&uri=https://raw.githubusercontent.com/JohnLDev/Luby-Node-Test/master/Insomnia_2020-11-22.json?token=AQVFH2YHBLBM6N3AAKYUZAC7PTKWK)

---
## 🔀 Rotas

<br>

## Authentication
---

### Rota Store
__Método:POST__

URL:`http://localhost:3333/user/create`
* Rota recebe através do body da request os dados necessários para criar um registro no banco de dados com o usuário.

```
body da request:
{
	"email":"john@33lenon.com",
	"name":"trachu",
	"localization":"pelotas,rs",
	"bio":"minha bio",
	"avatar":"https://adisajdioajs.com",
	"username":"john43lenon"
}
```
```
response:
  {
  "id": 4,
  "name": "trachu",
  "email": "john@33lenon.com",
  "username": "john43lenon",
  "localization": "pelotas,rs",
  "avatar": "https://adisajdioajs.com",
  "bio": "minha bio",
  "created_at": "2020-11-21T22:06:56.774Z",
  "updated_at": "2020-11-21T22:06:56.774Z"
}
```
---
### Rota Login
__Método:POST__

URL:`http://localhost:3333/user/login`
* Rota recebe através do body da request o username de um usuário e retorna o usuario e um token de acesso.

```
body da request:
{
	"username":"johnlenon"
}
```
```
response:
  {
  "user": {
    "id": 1,
    "name": "johnlenon alterado",
    "email": "john@lenon.com",
    "username": "johnlenon",
    "localization": "pelotas,rs",
    "avatar": "https://adisajdioajs.com",
    "bio": "minha bio",
    "created_at": "2020-11-21T19:44:40.465Z",
    "updated_at": "2020-11-21T20:18:26.554Z"
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MDU5OTcwNTgsImV4cCI6MTYwNjAwNDI1OCwic3ViIjoiMSJ9.1acwFm728QGAcE3T9bZ4L7hYhx1ORBlPyyT1HkpvcqI"
}
```
---
<br>

## Users
---

### Rota Index
__Método:GET__

URL:`http://localhost:3333/user/index`
* Rota lista todos os usuários cadastrados na api.

```
response:
 [
  {
    "id": 2,
    "name": "trachu",
    "email": "john@2lenon.com",
    "username": "john2lenon",
    "localization": "pelotas,rs",
    "avatar": "https://adisajdioajs.com",
    "bio": "minha bio",
    "created_at": "2020-11-21T19:44:46.242Z",
    "updated_at": "2020-11-21T19:44:46.242Z"
  },
  {
    "id": 3,
    "name": "trachu",
    "email": "john@3lenon.com",
    "username": "john4lenon",
    "localization": "pelotas,rs",
    "avatar": "https://adisajdioajs.com",
    "bio": "minha bio",
    "created_at": "2020-11-21T19:44:52.283Z",
    "updated_at": "2020-11-21T19:44:52.283Z"
  },
  {
    "id": 1,
    "name": "johnlenon alterado",
    "email": "john@lenon.com",
    "username": "johnlenon",
    "localization": "pelotas,rs",
    "avatar": "https://adisajdioajs.com",
    "bio": "minha bio",
    "created_at": "2020-11-21T19:44:40.465Z",
    "updated_at": "2020-11-21T20:18:26.554Z"
  }
]
```
---
### Rota Show
__Método:GET__

URL:`http://localhost:3333/user/show/:id`
* Rota recebe o id de um usuário e o detalha.

```
response:
 {
  "id": 1,
  "name": "johnlenon alterado",
  "email": "john@lenon.com",
  "username": "johnlenon",
  "localization": "pelotas,rs",
  "avatar": "https://adisajdioajs.com",
  "bio": "minha bio",
  "created_at": "2020-11-21T19:44:40.465Z",
  "updated_at": "2020-11-21T20:18:26.554Z",
  "followers": [],
  "followings": [
    {
      "id": 2,
      "createdAt": "2020-11-21T19:45:56.555Z",
      "updatedAt": "2020-11-21T19:45:56.555Z",
      "user_id": 1,
      "following_id": 2,
      "following": {
        "id": 2,
        "name": "trachu",
        "email": "john@2lenon.com",
        "localization": "pelotas,rs",
        "avatar": "https://adisajdioajs.com",
        "username": "john2lenon",
        "bio": "minha bio",
        "createdAt": "2020-11-21T19:44:46.242Z",
        "updatedAt": "2020-11-21T19:44:46.242Z"
      }
    }
  ],
  "repositories": [
    {
      "id": 1,
      "name": "LubyTest",
      "description": "teste atualizado",
      "public": false,
      "slug": "johnlenon_alterado/LubyTest",
      "stars": 1,
      "user_id": 1,
      "created_at": "2020-11-21T19:46:45.410Z",
      "updated_at": "2020-11-21T20:50:20.492Z"
    },
    {
      "id": 3,
      "name": "lubytest_2",
      "description": "teste",
      "public": true,
      "slug": "johnlenon_alterado/lubytest_2",
      "stars": 0,
      "user_id": 1,
      "created_at": "2020-11-21T20:23:51.337Z",
      "updated_at": "2020-11-21T20:23:51.337Z"
    }
  ],
  "token": [
    {
      "id": 1,
      "user_id": 1,
      "created_at": "2020-11-21T19:44:54.222Z",
      "updated_at": "2020-11-21T19:44:54.222Z"
    }
  ]
}
```
---
### Rota HandleFollow
__Método:PATCH__

URL:`http://localhost:3333/user/follow/:id`

* Rota recebe o id de um usuario e o caso esteja logado ele segue o usuário ou deixa de seguir o usuário.
* Rota authenticada

```
response:
 {
  "status": "follow",
  "Follow": {
    "id": 2,
    "user_id": 2,
    "follower_id": 1,
    "updatedAt": "2020-11-21T19:45:56.567Z",
    "createdAt": "2020-11-21T19:45:56.567Z"
  }
}

ou

{
  "status": "unfollow",
}
```
---
### Rota update
__Método:PUT__

URL:`http://localhost:3333/user/update`

* Rota atualiza o usuario que está logado.
* Parametros podem não ser envidados caso não deseje atualizalos
* Rota authenticada

```
body da request
{
	"email":"",
	"name":"johnlenon alterado",
	"localization":"pelotas,rs",
	"bio":"minha bio",
	"avatar":"https://adisajdioajs.com",
	"username":""
}

```

```
response:
 {
    "id": 1,
    "name": "johnlenon alterado",
    "email": "john@lenon.com",
    "username": "johnlenon",
    "localization": "pelotas,rs",
    "avatar": "https://adisajdioajs.com",
    "bio": "minha bio",
    "created_at": "2020-11-21T19:44:40.465Z",
    "updated_at": "2020-11-21T20:18:26.554Z"
  }
```
---

### Rota Delete
__Método:DELETE__

URL: `http://localhost:3333/user/delete/`

* Rota deleta o usuário que está logado.
* Rota authenticada

```
response:
{
  "deleted": true
}
```
---
<br>

## Repositories
---
### Rota Index
__Método:GET__

URL: `http://localhost:3333/repos/index`
* Rota lista todos os repositórios cadastrados na api.

```
response:
[
  {
    "id": 1,
    "name": "LubyTest",
    "description": "teste atualizado",
    "public": false,
    "slug": "johnlenon_alterado/LubyTest",
    "stars": 1,
    "user_id": 1,
    "created_at": "2020-11-21T19:46:45.410Z",
    "updated_at": "2020-11-21T20:50:20.492Z"
  },
  {
    "id": 3,
    "name": "lubytest_2",
    "description": "teste",
    "public": true,
    "slug": "johnlenon_alterado/lubytest_2",
    "stars": 0,
    "user_id": 1,
    "created_at": "2020-11-21T20:23:51.337Z",
    "updated_at": "2020-11-21T20:23:51.337Z"
  }
]
```
---
### Rota Show
__Método:GET__

URL:`http://localhost:3333/repos/show/:id`
* Rota recebe o id de um repositório e o detalha.

```
response:
 {
  "id": 1,
  "name": "LubyTest",
  "description": "teste atualizado",
  "public": false,
  "slug": "johnlenon_alterado/LubyTest",
  "user_id": 1,
  "stars": [
    {
      "id": 2,
      "createdAt": "2020-11-21T20:03:45.354Z",
      "updatedAt": "2020-11-21T20:03:45.354Z",
      "user_id": 1,
      "repository_id": 1
    }
  ],
  "created_at": "2020-11-21T19:46:45.410Z",
  "updated_at": "2020-11-21T20:50:20.492Z"
}
```
---

### Rota Store
__Método:POST__

URL:`http://localhost:3333/repos/create`
* Rota recebe através do body da request os dados necessários para criar um repositório e o salva no banco de dados.
* Rota authenticada

```
body da request:
{
	"name":"LubyTest 2",
	"description":"teste",
	"is_public": true
}
```
```
response:
 {
  "id": 3,
  "name": "lubytest_2",
  "description": "teste",
  "user_id": 1,
  "public": true,
  "slug": "johnlenon_alterado/lubytest_2",
  "updatedAt": "2020-11-21T20:23:51.337Z",
  "createdAt": "2020-11-21T20:23:51.337Z"
}
```
---

### Rota HandleStar
__Método:PATCH__

URL:`http://localhost:3333/repos/star/:id`

* Rota recebe o id de um repositório e o caso esteja logado ele da uma estrela ou remove a estrela de um repositório.
* Rota authenticada

```
response:
 {
  "status": "Star Created",
  "star": {
    "id": 3,
    "user_id": 1,
    "repository_id": 1,
    "updatedAt": "2020-11-21T22:25:35.338Z",
    "createdAt": "2020-11-21T22:25:35.338Z"
  }
}

ou

{
  "status": "Star Removed",
}
```
---
### Rota update
__Método:PUT__

URL:`http://localhost:3333/repos/update/:id`

* Rota recebe o id de um repositório do usuario que está logado e o atualiza.
* Parametros podem não ser envidados caso não deseje atualizalos,
* Rota authenticada

```
body da request
{
	"name":"Luby2Test",
	"description":"",
	"is_public": false
}

```

```
response:
 {
  "id": 1,
  "name": "luby2test",
  "description": "teste atualizado",
  "public": false,
  "slug": "johnlenon_alterado/luby2test",
  "stars": 1,
  "user_id": 1,
  "created_at": "2020-11-21T19:46:45.410Z",
  "updated_at": "2020-11-21T22:22:22.479Z"
}
```
---
### Rota Delete
__Método:DELETE__

URL: `http://localhost:3333/repos/delete/:id`

* Rota recebe o id do repositorio do usuario que está logado e o deleta.
* Rota authenticada

```
response:
{
  "deleted": true
}
```
---
<br>

## 💻 Executando o Back-end

### Pré-requisitos

É necessário ter instalado na sua máquina para execução desse projeto:
- NodeJS
- Gerenciador de pacotes (Npm ou Yarn)
- Banco de dados postgreSQL(Local ou através de docker)
  - caso opte por instalar o docker este é um tutorial de instalação
   [![Docker](https://www.ortussolutions.com/__media/logos/docker.png)](https://www.notion.so/Instala-o-do-Docker-8230846ae2c547b2988f2aca91fc1edf)
  - Com o docker instalado será necessário criar um container postgreSQL através do comando
  ```bash

    $ docker run --name nome -e POSTGRES_PASSWORD=senha -p 5432:5432  -d postgres

    ```
    - O retorno será o id do container criado e isso indica que tudo está funcionando


### ♊ Clonando o Repositório

```bash

$ git clone https://github.com/JohnLDev/Luby-Node-Test

# entre na pasta do projeto

$ cd Luby-Node-Test

```


### 🌐 Rodando o Servidor

Instale as dependências

```bash

$ yarn

# ou, caso use npm

$ npm install

```

- Nesse momento crie um arquivo .env na raiz do projeto e o preencha com os dados do seu banco de dados utilizando o arquivo .env-example como exemplo

crie o banco de dados

```bash

$ yarn sequelize db:create

# ou, caso use npm

$ npm run sequelize db:create

```

Modele o banco de dados

```bash

$ yarn sequelize db:migrate

# ou, caso use npm

$ npm run sequelize db:migrate

```

Rode o servidor

```bash

$ yarn dev:server

# ou, caso use npm

$ npm run dev:server

```

---

## 🛠️ Tecnologias

As ferramentas usadas no desenvolvimento do projeto.

#### Backend:
- Javascript
- NodeJS
- Express
- PostgreSQL
- Sequelize
- Yup
- JsonWebToken
- Nodemon


---
