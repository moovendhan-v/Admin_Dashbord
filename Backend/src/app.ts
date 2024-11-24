// app.ts

import express from 'express';
import { json } from 'body-parser';
import routes from './api/v1/routes/Index'; // Import routes from index.ts
import { errorHandler } from '@/api/v1/middleware/ErrorHanler'; // Ensure this errorHandler is correctly defined
import sequelize from './config/DatabaseConfig'; // Sequelize instance for database connection
import { Config } from './config/Env'; // Config file with port details

const app = express();

// Middleware to parse JSON bodies
app.use(json());

// Use your routes
app.use('/api', routes); // This will map all your routes under /api, e.g., /api/users

// Error handling middleware
app.use(errorHandler); // Handle any errors thrown by routes or middlewares

// Sync the database and start the server
const PORT = Config.PORT || 3000;

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}).catch((error) => {
  console.error('Unable to sync database:', error);
});

// Welcome message for the root route
app.get('/', (req, res) => {
    res.json({ message: 'Welcome to the API!' });
});
