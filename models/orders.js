module.exports = function(sequelize, DataTypes) {
  var orders = sequelize.define("orders", {
    burger: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  orders.associate = function(models) {
    orders.hasMany(models.devour, {
      onDelete: "cascade"
    });
  };


  return orders;
};
