const express = require('express');

const controller = require('../controllers/home');

module.exports = (app) => {
    app.get('/', controller.home);
}