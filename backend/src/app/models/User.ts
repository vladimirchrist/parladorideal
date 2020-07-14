import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import  Post  from './Post'

@Entity('users')
class User {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    password: string;

}

export default User;
