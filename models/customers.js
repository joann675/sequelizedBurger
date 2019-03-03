// Creates a "customer" model that matches up with DB
module.exports = function (sequelize, DataTypes) {
  var Customers = sequelize.define("Customers", {
    // Giving the Customer model a name of type STRING
    name: DataTypes.STRING
  });

  Customers.associate = function (models) {
    // Associating Customer with Burgers
    // When an Customer is deleted, also delete any associated Burgers
    Customers.hasMany(models.Burgers, {
      onDelete: "cascade"
    });
  };

  return Customers;
};
