const express = require('express');

const router = express.Router();

const burger = require('../models');

const sequelizeConnection = burger.sequelize;

sequelizeConnection.sync();

// redirects to index
router.get('/', function (req, res) {
    res.redirect('/index');
});

// index
router.get('/index', function (req, res) {
    burger.selectAll(function (data) {
        var hbsObject = { burgers: data };
        res.render('index', hbsObject);
    });
});

// new burger
router.post('/burger/create', function (req, res) {
    burger.insertBurger(req.body.burger_name, function () {
        res.redirect('/index');
    });
});

// eat burger
router.post('/burger/eat/:id', function (req, res) {
    burger.updateBurger(req.params.id, function () {
        res.redirect('/index');
    });
});


module.exports = router;