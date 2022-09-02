import { FamousReview } from "src/modules/famous-review/entities/famous-review.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class ReleaseInfo {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'date' })
    releaseDate: Date;

    @OneToMany(() => FamousReview, (famous_review) => famous_review.releaseInfo)
    famousReview: FamousReview[];
}
