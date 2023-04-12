import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDto } from '../dto/create-user.dto';
import { UsersService } from '../services/users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}
  @Get()
  getUsers() {
    return this.usersService.getUsers();
  }

  @Post()
  createUsers(@Body() createUserDto: CreateUserDto) {
    return this.usersService.createUsers(createUserDto);
  }
}

//extracting query params
//validating request body
