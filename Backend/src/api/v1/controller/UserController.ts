import { Request, Response, NextFunction } from 'express';
import Models from '@/api/v1/models/Index';

const User = Models.User;

interface CreateUserRequestBody {
  firstName: string;
  lastName: string;
  email: string;
}

interface CreateUserResponse {
  firstName: string;
  lastName: string;
  email: string;
}

class UserController {
  // This method now delegates to the User class
  public async getUsers(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const users = await User.findAll();
      res.status(200).json(users);
    } catch (error) {
      next(error);
    }
  }

  // This method now delegates to the User class
  public async createUser(
    req: Request<{}, {}, CreateUserRequestBody>, 
    res: Response<CreateUserResponse>, 
    next: NextFunction
  ): Promise<void> {
    try {
      const newUser = await User.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
      });

      res.status(201).json({
        firstName: newUser.firstName,
        lastName: newUser.lastName,
        email: newUser.email,
      });
    } catch (error) {
      next(error);
    }
  }
}

export default UserController;
