import Users from '@/api/v1/models/Users.models';
import DbSequelize from '@/config/DatabaseConfig';

const Models = {
    User: Users.initModel(DbSequelize),
};

// Set up associations
Object.values(Models).forEach((model) => {
    if ('associate' in model) {
        (model as any).associate(Models);
    }
});

export { DbSequelize, Models };
export default Models;