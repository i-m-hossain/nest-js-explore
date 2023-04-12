import { IsNotEmpty } from 'class-validator';

//DTO ===> Data transfer object
export class UpdateUserDto {
  @IsNotEmpty()
  username: string;

  @IsNotEmpty()
  password: string;
}
