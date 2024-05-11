import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { Public } from 'src/auth/public.route';
import { User } from './user.entity';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Public()
  @Get('/all-users')
  async getAllUsers() {
    return this.usersService.findAll();
  }

  @Public()
  @Get('/user/:id')
  async findUser(@Param(':id') id: number) {
    return this.usersService.findOne(id);
  }

  @Public()
  @Post('/create-user')
  async createUser(@Body() createUserDto: User) {
    return this.usersService.create(createUserDto);
  }
}
