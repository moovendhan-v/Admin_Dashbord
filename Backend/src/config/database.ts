import { Sequelize } from 'sequelize';

const sequelize = new Sequelize({
  database: process.env.DB_NAME || 'your_postgres_db',
  username: process.env.DB_USER || 'your_postgres_user',
  password: process.env.DB_PASS || 'your_postgres_password',
  host: process.env.DB_HOST || 'localhost',    
  dialect: 'postgres',             
  port: parseInt(process.env.DB_PORT || '5432', 10),
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
