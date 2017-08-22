
'use strict';
module.exports = function(sequelize, DataTypes) {
  var Burger = sequelize.define('Burger', {
    burger_name:{
     type: DataTypes.STRING,
     allowNull: false,
     validate: {
      len: [1, 140]
     }
   },
    devoured: {

      type: DataTypes.BOOLEAN,
      defaultValue: 0
    }

  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Burger;
};