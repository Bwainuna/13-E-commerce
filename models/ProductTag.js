// Import necessary modules and set up the ProductTag model using Sequelize.
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

// Create the ProductTag class, extending the Sequelize Model class.
class ProductTag extends Model {}

// Initialize the ProductTag model with its attributes and options.
ProductTag.init(
  {
    // Define the 'id' attribute for ProductTag:
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,    // It cannot be null.
      primaryKey: true,    // It is the primary key.
      autoIncrement: true, // It auto-increments for each new product tag.
    },
    // Define the 'product_id' attribute for ProductTag as a foreign key reference to 'id' in the 'product' model:
    product_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'product',
        key: 'id',
      },
    },
    // Define the 'tag_id' attribute for ProductTag as a foreign key reference to 'id' in the 'tag' model:
    tag_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'tag',
        key: 'id',
      },
    },
  },
  {
    sequelize,               // Use the established Sequelize connection.
    timestamps: false,      // Don't include timestamps like 'createdAt' and 'updatedAt'.
    freezeTableName: true,  // Prevent pluralizing the table name.
    underscored: true,      // Use snake_case for the table name and columns.
    modelName: 'product_tag', // Set the model name to 'product_tag'.
  }
);

// Export the ProductTag model for use in other parts of the application.
module.exports = ProductTag;

