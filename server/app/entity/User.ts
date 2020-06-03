import {Entity, Column, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    public firstName: string;

    @Column()
    public lastName: string;

    constructor(props: User = {} as User) {
        this.id = props.id;
        this.firstName = props.firstName;
        this.lastName = props.lastName;
    }

}