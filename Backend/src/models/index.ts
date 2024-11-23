import Users from '@/models/Users.models';
import DbSequelize from '@/config/database';

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