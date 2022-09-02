import { Trailer } from "src/modules/trailers/entities/trailer.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Director {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    imageUrl: string;

    @ManyToOne(() => Trailer, (trailer) => trailer.directors)
    trailer: Trailer;
}
