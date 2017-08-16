module.exports = function(sequelize, DataTypes) {
  var devour = sequelize.define("devour", {
    burger: {
      type: DataTypes.STRING,
      defaultValue: false,
    }
  });

  devour.associate = function(models) {
    devour.belongsTo(models.orders, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return devour;
};
