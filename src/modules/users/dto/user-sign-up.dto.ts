import { IsDate, IsEnum } from "class-validator";
import { USER_ROLE } from "src/common/enum";


export class UserSignUpDto {
    fullname: string;
    email: string;
    phone: string;

    @IsEnum(USER_ROLE)
    role: USER_ROLE;

    @IsDate()
    dob: Date
    
    avatarUrl: string;
    password: string;
}

export class UserUpdateDto extends UserSignUpDto {}