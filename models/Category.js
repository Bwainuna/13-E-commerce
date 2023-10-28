// Import necessary modules and setup the Category model using Sequelize.
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// Create the Category class, which extends the Sequelize Model class.
class Category extends Model {}

// Initialize the Category model with its attributes and options.
Category.init(
  {
    // Define the 'id' attribute for Category:
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,    // It cannot be null.
      primaryKey: true,    // It is the primary key.
      autoIncrement: true, // It auto-increments for each new category.
    },
    // Define the 'category_name' attribute for Category:
    category_name: {
      type: DataTypes.STRING,
      allowNull: false,    // It cannot be null.
    },
  },
  {
    sequelize,               // Use the established Sequelize connection.
    timestamps: false,      // Don't include timestamps
    freezeTableName: true,  // Prevent pluralizing the table name.
    underscored: true,      // Use snake_case for the table name and columns.
    modelName: 'category',  // Set the model name to 'category'.
  }
);

// Export the Category model for use in other parts of the application.
module.exports = Category;
