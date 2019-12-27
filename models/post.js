module.exports = function (sequelize, DataTypes) {
    const devourers = sequelize.define('devourers', {
        devourer_name: DataTypes.STRING,
        burgerId: DataTypes.INTEGER
    });
    return devourers;
};