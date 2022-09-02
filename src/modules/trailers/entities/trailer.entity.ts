import { Actor } from "src/modules/actors/entities/actor.entity";
import { Director } from "src/modules/directors/entities/director.entity";
import { ReleaseInfo } from "src/modules/release-info/entities/release-info.entity";
import { Comment } from "src/modules/comments/entities/comment.entity";
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Genre } from "src/modules/genres/entities/genre.entity";

@Entity()
export class Trailer {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    movieName: string;

    @Column()
    length: string;

    @Column()
    description: string;

    @Column()
    videoUrl: string;

    @Column()
    minAge: number;

    @Column()
    thumbnailUrl: string;

    @OneToOne(() => ReleaseInfo)
    @JoinColumn()
    releaseInfo: ReleaseInfo;

    @OneToMany(()=> Actor, (actor) => actor.trailer)
    actors: Actor[];

    @OneToMany(()=> Director, (director) => director.trailer)
    directors: Director[];

    @OneToMany(() => Comment, (comment) => comment.trailer)
    comments: Comment[];

    @ManyToMany(() => Genre)
    @JoinTable()
    genres: Genre[];

}
