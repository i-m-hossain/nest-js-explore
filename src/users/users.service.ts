import { Injectable } from '@nestjs/common';
import { UpdateUserDto } from './dto/update-user.dto';
import { CreateUserType } from 'src/utils/types';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  private fakeUsers = [
    { username: 'imran', email: 'imran@gmail.com', password: '123456' },
  ];
  create(createUserDto: CreateUserType) {
    this.fakeUsers.push(createUserDto);
    return this.fakeUsers;
  }

  findAll() {
    return this.fakeUsers;
  }

  findOne(id: number) {
    return { id, name: 'imran', email: 'imran@gmail.com' };
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
