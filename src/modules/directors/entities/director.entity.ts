import { Trailer } from "src/modules/trailers/entities/trailer.entity";
import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Director {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    imageUrl: string;

    @ManyToMany(() => Trailer)
    @JoinTable()
    manageIn: Trailer[]
}