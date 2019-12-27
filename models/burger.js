module.exports = function (sequelize, DataTypes) {
    const Burger = sequelize.define("Burger", {
        name: DataTypes.STRING,
        devoured: DataTypes.BOOLEAN,
        devourerId: DataTypes.INTEGER
    }, {
        classMethods: {
            associate: function (models) {
                Burger.hasOne(models.post)
            }
        }
    });
    return Burger;
};