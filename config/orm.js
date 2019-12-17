const connection = require('./connection.js');

// connect to db
connection.connect(function (err) {
    if (err) {
        console.log("Error connecting: " + err.stack);
        return;
    }
    console.log("Connected as id " + connection.threadId);
});

const orm = {
    selectAll: function (callback) {
        connection.query('SELECT * FROM burgers', function (err, res) {
            if (err) throw err;
            callback(res);
        });
    },
    //
    insertBurger: function (burger_name, callback) {
        connection.query('INSERT INTO burgers SET ?', {
            burger_name: burger_name,
            devoured: false
        }, function (err, res) {
            if (err) throw err;
            callback(res);
        });
    },
    //
    updateBurger: function (id, callback) {
        connection.query("UPDATE burgers SET ? WHERE ?",
            [{ devoured: true }, { id: id }],
            function (err, res) {
                if (err) throw err;
                callback(res);
            });
    }
}

module.exports = orm;