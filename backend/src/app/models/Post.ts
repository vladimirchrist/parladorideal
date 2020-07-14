import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, CreateDateColumn } from "typeorm";
import User from "./User";

@Entity("posts")
class Post {

    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    userId: string;

    @ManyToOne(() => User)
    @JoinColumn({name: 'userId'})
    user: User;

    @Column({ length: 280 })
    message: string;

    @CreateDateColumn()
    createdAt: Date

    @CreateDateColumn()
    updatedAt: Date
}

export default Post;