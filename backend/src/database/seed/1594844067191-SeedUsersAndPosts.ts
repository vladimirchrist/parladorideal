import { MigrationInterface, QueryRunner, getRepository } from "typeorm";
import User from "../../app/models/User";
import { UsersSeed } from "../SeedData/UsersSeed";
import Post from "../../app/models/Post";
import { PostsSeed } from "../SeedData/PostsSeed";

export class SeedUsersAndPosts1594844067191 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        const post = await queryRunner.hasTable('users').then(async () => {
            console.log(UsersSeed)
            const user = await queryRunner.connection.getRepository(User).save(UsersSeed);
            const post = PostsSeed.map(post => {
                post.userId = user.id
                return post;
            })
            return post;

        })

        await queryRunner.hasTable('posts').then(async () => {
            console.log(post);
            await queryRunner.connection.getRepository(Post).save(post)
        })
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
