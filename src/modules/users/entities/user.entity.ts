import { USER_ROLE } from "src/common/enum";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    fullname: string;

    @Column()
    email: string;

    @Column()
    phone: string;

    @Column({ type: "enum", enum: USER_ROLE, default: USER_ROLE.END_USER })
    role: USER_ROLE

    @Column({ type: 'date' })
    dob: Date

    @Column()
    avatarUrl: string;

    @Column()
    password: string;

}
