const swaggerJsDoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Exclusive Drive API",
      version: "1.0.0",
      description: "Documentação da API do Marketplace Exclusive Drive",
    },
    servers: [
      {
        url: "http://localhost:3000",
        description: "Servidor de Desenvolvimento",
      },
    ],
  },
  apis: ["./src/routes/*.js"], // Arquivos onde as rotas estão definidas
};

const swaggerSpec = swaggerJsDoc(options);

module.exports = swaggerSpec;
