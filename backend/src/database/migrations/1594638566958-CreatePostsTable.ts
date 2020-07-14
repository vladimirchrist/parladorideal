import { MigrationInterface, QueryRunner, Table, TableForeignKey, Column, TableColumn, QueryBuilder } from "typeorm";

export class CreatePostsTable1594638566958 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "posts",
            columns: [
                {
                    name: "id",
                    type: "uuid",
                    isPrimary: true,
                    generationStrategy: "uuid",
                    default: "uuid_generate_v4()",
                },
                {
                    name: "message",
                    type: "varchar",
                    length: "280",
                },
                {
                    name: 'createdAt',
                    type: 'timestamp with time zone',
                    default: 'now()',
                },
                {
                    name: 'updatedAt',
                    type: 'timestamp with time zone',
                    default: 'now()',
                },
            ]
        }), true);

        await queryRunner.addColumn("posts", new TableColumn({
            name: "userId",
            type: "uuid"
        }));

        await queryRunner.createForeignKey("posts", new TableForeignKey({
            columnNames: ["userId"],
            referencedColumnNames: ["id"],
            referencedTableName: "users",
            onDelete: "CASCADE"
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        const table = await queryRunner.getTable("posts");
        const fk = table?.foreignKeys.find(fk => fk.columnNames.indexOf("userId") !== -1)
        fk ? await queryRunner.dropForeignKey("posts", fk) : undefined;
        await queryRunner.dropColumn("posts", "userId");
        await queryRunner.dropTable("posts");
    }

}
