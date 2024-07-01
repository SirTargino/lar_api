import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("users")
export class User {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ nullable: false, length: 50 })
    name: string;

    @Column({ nullable: false, length: 100, unique: true })
    email: string;

    @Column({ nullable: false, length: 15 })
    phone: string;
    
    @Column({ nullable: false, length: 100 })
    password: string;

    @Column({ nullable: false, length: 10 })
    cep: string;

    @Column({ nullable: false, length: 100 })
    street: string;

    @Column({nullable: false, length: 255})
    complement: string;
}