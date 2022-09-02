import { ReleaseInfo } from "src/modules/release-info/entities/release-info.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class FamousReview {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    reviewerName: string;

    @Column()
    reviewerAvatarUrl: string;

    @Column()
    comment: string;

    @ManyToOne(() => ReleaseInfo, (release_info) => release_info.famousReview)
    releaseInfo: ReleaseInfo;
}
