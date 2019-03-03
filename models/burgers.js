// Creates a "burger" model that matches up with DB

module.exports = function (sequelize, DataTypes) {
  var Burgers = sequelize.define("Burgers", {
    burger_name: DataTypes.STRING,
    devoured: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false },
  });

  Burgers.associate = function(models) {
    // We're saying that a Post should belong to an Author
    // A Post can't be created without an Author due to the foreign key constraint
    Burgers.belongsTo(models.Customers, {
      foreignKey: {
        allowNull: true
      }
    });
  };

  return Burgers;
};