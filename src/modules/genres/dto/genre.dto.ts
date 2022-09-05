import { IsEnum, IsNumber, IsString } from "class-validator";
import { USER_ROLE } from "src/common/enum";

export class GenreDto {
    @IsNumber()
    name: number;

    @IsString()
    symbolUrl: string;

    @IsString()
    backgroundColor: string;
}
