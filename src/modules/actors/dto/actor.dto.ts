import { IsString, isString } from "class-validator";

export class ActorDto{
    @IsString()
    name: string;

    @IsString()
    imageUrl: string;
}
