import { IsNotEmpty, IsEmail, IsStrongPassword } from 'class-validator';

//DTO ===> Data transfer object
export class CreateUserDto {
  @IsNotEmpty()
  username: string;
  @IsEmail()
  @IsNotEmpty()
  email: string;
  @IsNotEmpty()
  @IsStrongPassword()
  password: string;

  @IsNotEmpty()
  age: number;
}
