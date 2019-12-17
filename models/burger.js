const orm = require("../config/orm.js");

let burger = {

    selectAll: function (callback) {
        orm.selectAll(function (res) {
            callback(res); 
        });
    },

    insertBurger: function (burger_name, callback) {
        orm.insertBurger(burger_name, function (res) {
            callback(res); 
        });
    },

    updateBurger: function (id, callback) {
        orm.updateBurger(id, function (res) {
            callback(res); 
        });
    }
}

module.exports = burger;