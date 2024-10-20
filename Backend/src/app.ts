import express from 'express';
import { json } from 'body-parser';
import routes from './routes/index';
import { errorHandler } from './middleware/errorHanler';
import sequelize from './config/database';

const app = express();

// Middleware to parse JSON bodies
app.use(json());

// Use your routes
app.use('/api', routes);

// Error handling middleware
app.use(errorHandler);

// Sync the database and start the server
const PORT = process.env.PORT || 3000;

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

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

