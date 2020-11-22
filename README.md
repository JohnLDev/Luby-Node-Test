<h1 align="center" >

  Luby teste desenvolvedor node
</h1>

<p align="center">Teste proposto pela empresa LubySoftware</p>



<p align="center">
 <a href="#-sobre">Sobre</a> •
 <a href="#-layout">Layout</a> •
 <a href="#-executando-o-happy">Como executar</a> •
 <a href="#-tecnologias">Tecnologias</a> •
 <a href="#-autora">Autora</a>
</p>

---

## 💡 Sobre

O teste proposto pela Luby era realizar o desenvolvimento de uma api semelhante a do github com as devidas especificações da empresa.

---



# 👌 Funcionalidades



## ER Diagram
<img alt="er" title="Er" src="./images/er.png" />

<br>

---



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
    - Agora será preciso acessar o banco de dados através de um software adequado (Beekeeper studio,DBeaver) e criar um banco de dados que sera usado no .env

- Para rodar a aplicação mobile será necessário um emulador de android ou dispositivo físico
    - Emulador digitar o comando abaixo
    ```bash

    $ adb reverse tcp:3333 tcp:3333

    ```
     - Para utilizar dispositivo físico será necessário alterar a base urç da api em /mobile/src/service/api.ts para o ip de sua maquina na rede
          - esse ip pode ser pego na aba connection do expo

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
- Bcriptjs


---
