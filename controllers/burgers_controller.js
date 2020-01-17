const express = require('express');

const router = express.Router();

const db = require('../models/');

// const sequelizeConnection = db.sequelize;

// sequelizeConnection.sync();

// redirects to index
router.get('/', function (req, res) {
    res.redirect('/index');
});

// render index with burgers from db
router.get('/index', function (req, res) {
    db.Burger.findAll().then(function (result) {
        const hbsObject = { burger: result };
        return res.render('index', hbsObject);
    });
});

// create burger
router.post('/db/create', function (req, res) {
    db.create({
        burger_name: req.body.burger_name
    }).then(function (result) {
        console.log(result);
        res.redirect('/index');
    });
});

// eat burger
router.put('/db/eat/:id', function (req, res) {
    db.update({
        devoured: 1
    },
        {
            where: {
                id: req.params.id
            }
        }).then(function (result) {
            console.log(result);
            res.json('/');
        });
});



module.exports = router;