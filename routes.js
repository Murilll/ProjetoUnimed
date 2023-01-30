// Iniciando Route do Express
const express = require('express');
const route = express.Router();

// Iniciando Multer
const multer = require("multer");
// Recebendo arquivo do multer que criamos
const config = require('./src/config/multer');

// Importando os Controllers
const home = require('./src/controllers/home');
const cadastro = require('./src/controllers/cadastro');

// Iniciando as rotas
route.get('/', home.pagInicialGet);
route.get('/Login/:id', home.pagLogin);
route.post('/Verificar/:id', home.VerificarLogin);



route.get('/Cadastrar', cadastro.paciente);
route.post('/Cadastrar', cadastro.pacienteInsert);

route.get('/CadastrarMedico', cadastro.medico);
route.post('/CadastrarMedico', multer(config).single('Foto'), cadastro.medicoInsert);

route.get('/CadastrarADM', cadastro.adm);
route.post('/CadastrarADM', cadastro.admInsert);



module.exports = route;
