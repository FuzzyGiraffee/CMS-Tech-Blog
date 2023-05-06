const { Model, DataTypes, TEXT } = require("sequelize");
const sequelize = require("../config/connections");

// create our Post model - adding all this in our model method allows us to use it in all the routes in post-routes.js without having to ask for it becuase it's already asked to be included here
class Post extends Model {}

// create fields/columns for Post model
Post.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        // title must be between 1 and 50 characters
        len: [1, 50],
      },
    },
    contents: {
      type: TEXT,
      allowNull: false,
      validate: {
        // contents must be at least one characters long and no longer than 500
        len: [1, 500],
      },
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "post",
  }
);

module.exports = Post;
