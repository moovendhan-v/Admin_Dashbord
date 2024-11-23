import { Sequelize } from 'sequelize';
import { Config } from "./config";

console.log('Config', JSON.stringify(Config))

const sequelize = new Sequelize({
  database: Config.DB_NAME,
  username: Config.DB_USER,
  password: Config.DB_PASS,
  host: Config.DB_HOST,
  dialect: 'postgres',             
  port: parseInt(Config.DB_PORT || '5432', 10),
  logging: false,
});

(async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})();

export default sequelize;
