const express = require('express');
const path = require('path');
const createEngine = require('express-react-views').createEngine();

const config = (app) => {
  // Set
  app.set('view engine', 'jsx');
  app.set('views', path.join(process.env.PWD, 'views'));

  // Engine
  app.engine('jsx', createEngine);

  // Use
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.use(express.static('public'));
};

module.exports = config;
