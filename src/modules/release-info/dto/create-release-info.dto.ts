import { IsDate } from "class-validator";

export class ReleaseInfoDto {
    @IsDate()
    releaseDate: Date;
}
