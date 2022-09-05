import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateUser implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'users',
            columns: [
                {
                    name: 'id',
                    type: 'int',
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment'
                },

                {
                    name: 'fullname',
                    type: 'varchar'
                },

                {
                    name: 'email',
                    type: 'varchar'
                },

                {
                    name: 'phone',
                    type: 'varchar(15)'
                },

                {
                    name: 'role',
                    type: 'varchar(10)'
                },

                {
                    name: 'dob',
                    type: 'datetime',
                    default: "now()"
                },

                {
                    name: 'avatarUrl',
                    type: 'varchar'
                },

                {
                    name: 'password',
                    type: 'varchar'
                },
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('users');
    }

}
