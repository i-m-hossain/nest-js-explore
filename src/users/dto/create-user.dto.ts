import { IsNotEmpty } from 'class-validator';

//DTO ===> Data transfer object
export class CreateUserDto {
  @IsNotEmpty()
  username: string;

  @IsNotEmpty()
  password: string;
}
