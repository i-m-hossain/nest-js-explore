import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Post } from 'src/typeorm/entities/Post';
import { Profile } from 'src/typeorm/entities/Profile';
import { User } from 'src/typeorm/entities/User';
import {
  CreatePostType,
  CreateUserProfileType,
  CreateUserType,
  UpdateUserType,
} from 'src/utils/types';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
    @InjectRepository(Profile) private profileRepository: Repository<Profile>,
    @InjectRepository(Post) private postRepository: Repository<Post>,
  ) {}

  createUsers(userDetails: CreateUserType) {
    const newUser = this.userRepository.create({
      ...userDetails,
      createdAt: new Date(),
    });
    return this.userRepository.save(newUser);
  }

  getUsers() {
    return this.userRepository.find({ relations: ['profile', 'posts'] });
  }

  updateUser(id: number, updateUserDetails: UpdateUserType) {
    return this.userRepository.update({ id }, { ...updateUserDetails });
  }

  deleteUser(id: number) {
    return this.userRepository.delete(id);
  }
  async createUserProfile(
    id: number,
    userProfileDetails: CreateUserProfileType,
  ) {
    const user = await this.userRepository.findOneBy({ id });
    if (!user)
      throw new HttpException(
        'user not found , can not create profile',
        HttpStatus.BAD_REQUEST,
      );
    const newUserProfile = this.profileRepository.create(userProfileDetails);
    const savedProfile = await this.profileRepository.save(newUserProfile);
    user.profile = savedProfile;
    return this.userRepository.save(user);
  }
  async createPost(id: number, postDetails: CreatePostType) {
    const user = await this.userRepository.findOneBy({ id });
    if (!user)
      throw new HttpException('user not found', HttpStatus.BAD_REQUEST);
    const newPost = this.postRepository.create({
      ...postDetails,
      user,
    });
    return await this.postRepository.save(newPost);
  }
}
