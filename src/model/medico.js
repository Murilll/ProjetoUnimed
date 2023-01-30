const Sequelize = require('sequelize');
const database = require('../config/db');

// Criando a tabela Sala
const medico = database.define('Medico', {
    IDMedico: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
    },

    Nome: {
    type: Sequelize.STRING(50),
    allowNull: false
    },

    CPF_Medico: {
    type: Sequelize.STRING(14),
    allowNull: false
    },

    Idade: {
        type: Sequelize.INTEGER,
        allowNull: false
    },

    CRM: {
        type: Sequelize.STRING(6),
        allowNull: false
    },

    Senha: {
        type: Sequelize.STRING(100),
        allowNull: false
    },

    Area: {
        type: Sequelize.STRING(100),
        allowNull: false
    },

    Foto: {
        type: Sequelize.STRING(50),
        allowNull: false
    }
});

// Exportando essa tabela
module.exports = medico;
