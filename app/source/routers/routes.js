const imports = require('./import')

const express = require('express');
const Router = express.Router();

Router.get('/', imports.controllers.index.getMethodController);

module.exports = Router; 