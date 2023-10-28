// Import necessary modules and set up the Tag model using Sequelize.
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

// Create the Tag class, extending the Sequelize Model class.
class Tag extends Model {}

// Initialize the Tag model with its attributes and options.
Tag.init(
  {
    // Define the 'id' attribute for Tag:
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,    // It cannot be null.
      primaryKey: true,    // It is the primary key.
      autoIncrement: true, // It auto-increments for each new tag.
    },
    // Define the 'tag_name' attribute for Tag, which holds the name of the tag:
    tag_name: {
      type: DataTypes.STRING,
      allowNull: false, // It cannot be null.
    },
  },
  {
    sequelize,               // Use the established Sequelize connection.
    timestamps: false,      // Don't include timestamps like 'createdAt' and 'updatedAt'.
    freezeTableName: true,  // Prevent pluralizing the table name.
    underscored: true,      // Use snake_case for the table name and columns.
    modelName: 'tag',       // Set the model name to 'tag'.
  }
);

// Export the Tag model for use in other parts of the application.
module.exports = Tag;