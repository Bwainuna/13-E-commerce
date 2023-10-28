// Import necessary modules and set up the Product model using Sequelize.
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

// Create the Product class, extending the Sequelize Model class.
class Product extends Model {}

// Initialize the Product model with its attributes and options.
Product.init(
  {
    // Define the 'id' attribute for Product:
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,    // It cannot be null.
      primaryKey: true,    // It is the primary key.
      autoIncrement: true, // It auto-increments for each new product.
    },
    // Define the 'product_name' attribute for Product:
    product_name: {
      type: DataTypes.STRING,
      allowNull: false,    // It cannot be null.
    },
    // Define the 'price' attribute for Product:
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false,    // It cannot be null.
      validate: {
        isDecimal: true,   // It must be a valid decimal number.
      },
    },
    // Define the 'stock' attribute for Product:
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,    // It cannot be null.
      defaultValue: 10,   // Default value is 10 if not provided.
      validate: {
        isNumeric: true,   // It must be a valid numeric value.
      },
    },
    // Define the 'category_id' attribute for Product as a foreign key reference to 'id' in the 'category' model:
    category_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'category',
        key: 'id',
      },
    },
  },
  {
    sequelize,               // Use the established Sequelize connection.
    timestamps: false,      // Don't include timestamps like 'createdAt' and 'updatedAt'.
    freezeTableName: true,  // Prevent pluralizing the table name.
    underscored: true,      // Use snake_case for the table name and columns.
    modelName: 'product',  // Set the model name to 'product'.
  }
);

// Export the Product model for use in other parts of the application.
module.exports = Product;

