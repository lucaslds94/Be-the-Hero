const express = require('express');
const cors = require('cors');
const {errors} = require('celebrate')
const routes = require('./routes'); 


const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(erros());

module.exports = app;
/**
     * Rota / Recurso
     */

 /**
     *          Métodos HTTP:
     * 
     * GET: Buscar/listar uma informação do back-end
     * POST: Criar uma informação no back-end
     * PUT: Alterar uma informação no back-end
     * DELETE: Deletar uma informação no back-end
     */ 

/**
     *        Tipos de parâmentros: 
     * 
     * Query Params: Parâmetros nomeados enviados na rota após "?" (filtros/paginação)
     * Route Params: Parâmetros utilizados para identificar recursos
     * Request Body: Corpo da requisição, ultilizado para criar ou alterar recursos
     */ 

 /**
     *          Bancos de Dados: relacionais e não relacionais:
     * 
     * SQL: MySQL, SQLite PostgreSQL, Oracle, Microsoft SQL Server
     * NOSQL: MongoDB, CouchDB etc
     */

/**
     * Driver: SELECT * FROM users
     * Query Builder: table('users').select('*').where()
     */


app.listen(3333);