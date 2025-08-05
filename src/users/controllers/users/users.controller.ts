import { Controller, Get, Post, Res, Req } from '@nestjs/common';
import { Request, Response } from 'express';

@Controller('users')
export class UsersController {
  @Get()
  getUsers() {
    return {
      userName: 'Rishit Rajpara',
      email: 'rishit@giriraj.in',
    };
  }

  @Post()
  createUser(@Req() req: Request, @Res() res: Response) {
    const user = req.body;
    console.log('User data received:', user);
    // Here you would typically save the user to a database
    res.status(201).json({
      message: 'User created successfully',
      user,
    });
  }
}
