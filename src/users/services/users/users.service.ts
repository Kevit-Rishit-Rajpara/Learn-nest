import { Injectable } from '@nestjs/common';
import { CreateUserType } from 'src/utils/types';

@Injectable()
export class UsersService {
  fakeUsers = [
    {
      userName: 'Rishit Rajpara',
      email: 'test@test.test',
    },
    {
      userName: 'Test User',
      email: 'test1@test.test',
    },
    {
      userName: 'Test User 2',
      email: 'test2@test.test',
    },
  ];

  fetchUsers() {
    return this.fakeUsers;
  }

  createUser(userData: CreateUserType) {
    this.fakeUsers.push(userData);
    return {};
  }
}
