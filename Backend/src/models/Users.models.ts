import { DataTypes, Sequelize, Model, Optional } from 'sequelize';

export interface UserAttributes {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
}

class Users extends Model {
  public id!: number;
  public firstName!: string;
  public lastName!: string;
  public email!: string;

  static initModel(sequelize: Sequelize) {
    return Users.init(
      {
        id: {
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV4,
          primaryKey: true,
        },
        firstName: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        lastName: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        email: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true,
        },
      },
      {
        sequelize,
        timestamps: true,
        modelName: 'User',
      }
    );
  }
}

export default Users;
