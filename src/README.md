# Marketplace API

Este projeto é uma API para um marketplace, desenvolvida com **Node.js** e **Express.js**.

## 📌 Tecnologias Utilizadas

- **Node.js**
- **Express.js**
- **Dotenv** (gerenciamento de variáveis de ambiente)

## 🚀 Como Configurar e Executar

### 1️⃣ Clonar o Repositório

```sh
git clone https://github.com/guilhermebilbao/meumarketplace-api.git
cd meumarketplace-api
```

### 2️⃣ Instalar as Dependências

```sh
npm install
```

### 3️⃣ Criar o Arquivo `.env`

Renomeie o arquivo `.env_example` para `.env` e defina as variáveis de ambiente:

```sh
PORT=3000
```

### 4️⃣ Executar o Servidor

- Com **Node.js**:
  ```sh
  node src/index.js
  ```
- Com **Nodemon** (se instalado):
  ```sh
  nodemon src/index.js
  ```

A API estará rodando em **http://localhost:3000/** 🚀

## 📂 Estrutura do Projeto

```
marketplace-api/
│── node_modules/
│── src/
│   ├── controllers/      # Controladores (lógica dos endpoints)
│   ├── models/           # Modelos do banco de dados
│   ├── routes/           # Rotas da API
│   ├── services/         # Lógica de negócios
│   ├── middlewares/      # Middlewares (autenticação, logs, erros)
│   ├── config/           # Configurações do sistema
│   ├── index.js          # Arquivo principal do servidor
│── .env                  # Variáveis de ambiente
│── package.json          # Configuração do projeto
│── .gitignore            # Arquivos ignorados pelo Git
│── README.md             # Documentação do projeto
```

## 🛠 Próximos Passos

- [ ] Implementar conexão com banco de dados
- [ ] Criar autenticação JWT
- [ ] Adicionar middlewares de segurança

## 📄 Licença

Este projeto está sob a licença MIT. Sinta-se livre para contribuir! 🎉
