// const connection = require('../config/connection.js');

// connect to db
// connection.connect(function (err) {
//     if (err) {
//         console.log("Error connecting: " + err.stack);
//         return;
//     }
//     console.log("Connected as id " + connection.threadId);
// });

const db = require("../models");

module.exports = function (app) = {
    app.get("/api/authors", function (req, res) {
        db.Author.findAll({}).then(function (dbAuthor) {
            res.json(dbAuthor);
        });
    });

    app.get("/api/authors/:id", function (req, res) {
        // Find one Author with the id in req.params.id and return them to the user with res.json
        db.Author.findOne({
            where: {
                id: req.params.id
            }
        }).then(function (dbAuthor) {
            res.json(dbAuthor);
        });
    });

    app.post("/api/authors", function (req, res) {
        // Create an Author with the data available to us in req.body
        console.log(req.body);
        db.Author.create(req.body).then(function (dbAuthor) {
            res.json(dbAuthor);
        });
    });

    app.delete("/api/authors/:id", function (req, res) {
        // Delete the Author with the id available to us in req.params.id
        db.Author.destroy({
            where: {
                id: req.params.id
            }
        }).then(function (dbAuthor) {
            res.json(dbAuthor);
        });
    });
    // selectAll: function (callback) {
    //     connection.query('SELECT * FROM burgers', function (err, res) {
    //         if (err) throw err;
    //         callback(res);
    //     });
    // },
    // //
    // insertBurger: function (burger_name, callback) {
    //     connection.query('INSERT INTO burgers SET ?', {
    //         burger_name: burger_name,
    //         devoured: false
    //     }, function (err, res) {
    //         if (err) throw err;
    //         callback(res);
    //     });
    // },
    // //
    // updateBurger: function (id, callback) {
    //     connection.query("UPDATE burgers SET ? WHERE ?",
    //         [{ devoured: true }, { id: id }],
    //         function (err, res) {
    //             if (err) throw err;
    //             callback(res);
    //         });
    // }
}

module.exports = orm;