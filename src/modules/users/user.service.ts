import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseService } from 'src/interface/base.service';
import { Repository } from 'typeorm';
import { UserSignInDto } from './dto/user-sign-in.dto';
import { UserSignUpDto } from './dto/user-sign-up.dto';
import { User } from './entities/user.entity';
import * as bcrypt from 'bcrypt';
import { SALT_ROUNDS } from 'src/common/constant';

@Injectable()
export class UserService extends BaseService<User>{
  constructor(
    @InjectRepository(User)
    protected repository: Repository<User>
  ) {
    super();
  }

  async findOne(id: number): Promise<User> {
    return await this.repository.findOneBy({ id });
  }

  async signInWithEmailAndPassword(signInDto: UserSignInDto): Promise<User|Object> {
    const user: User = await this.repository.findOneBy({ "email": signInDto.email });
    if (user === null){
      return {
        "status": 404,
        "message": "Email was incorrect!"
      }
    }

    const checkPwdResult = await bcrypt.compare(signInDto.password, user.password);
    if (!checkPwdResult){
      return {
        "status": 404,
        "message": "Password was incorrect"
      }
    }
    return user;
  }

  async signUpWithEmailAndPassword(signUpDto: UserSignUpDto): Promise<User> {
    const newUser = new User();
    newUser.email = signUpDto.email;
    newUser.password = await bcrypt.hash(signUpDto.password, SALT_ROUNDS);
    newUser.fullname = signUpDto.fullname;
    newUser.phone = signUpDto.phone;
    newUser.dob = signUpDto.dob;
    newUser.role = signUpDto.role;
    newUser.avatarUrl = signUpDto.avatarUrl;
    return await this.repository.save(newUser);
  }


}
