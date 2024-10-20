import { Request, Response, NextFunction } from 'express';
import UserService from '../services/UserServices';

class UserController {
  static async createUser(req: Request, res: Response, next: NextFunction) {
  //   try {
  //     const user = await UserService.createUser(req.body, res, next);
  //     res.status(201).json(user);
  //   } catch (error) {
  //     next(error);
  //   }
  // }

  // static async getAllUsers(req: Request, res: Response, next: NextFunction) {
  //   try {
  //     const users = await UserService.getAllUsers(req.body, res, next);
  //     res.status(200).json(users);
  //   } catch (error) {
  //     next(error);
  //   }
  }
}

export default UserController;
