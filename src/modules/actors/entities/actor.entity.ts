import { Trailer } from "src/modules/trailers/entities/trailer.entity";
import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Actor {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    imageUrl: string;

    @ManyToMany(() => Trailer)
    @JoinTable()
    joinIn: Trailer[];
}
