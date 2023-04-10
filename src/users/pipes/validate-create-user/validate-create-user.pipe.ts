import {
  ArgumentMetadata,
  Injectable,
  PipeTransform,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { CreateUserDto } from '../../dto/create-user.dto';

@Injectable()
export class ValidateCreateUserPipe implements PipeTransform {
  transform(value: CreateUserDto, metadata: ArgumentMetadata) {
    const parseAgeToInt = parseInt(value.age.toString());
    if (isNaN(parseAgeToInt)) {
      console.log(value.age + 'is not a number');
      throw new HttpException(
        'invalid data type for property age, expected number',
        HttpStatus.BAD_REQUEST,
      );
    }
    return { ...value, age: parseAgeToInt };
  }
}
