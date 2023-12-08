import { DataTypes } from "sequelize";
import { sequelize } from "../../config/database/database.js";

const User = sequelize.define('users', {
    id: {
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
        type: DataTypes.INTEGER,
    },

    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    accountNumber: {
        type: DataTypes.STRING,
        allowNull:false,
    },

    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    amount: {
        type: DataTypes.FLOAT, 
        defaultValue: 1000,
        allowNull: false,
    },

    status : {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
        allowNull: false,
    }
});

export default User;