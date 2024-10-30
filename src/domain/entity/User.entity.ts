import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Quotation } from "./Quotation.entity";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  dni!: number;

  @Column()
  name!: string;

  @Column()
  email!: string;

  @Column()
  phone_number!: number;

  @OneToMany(() => Quotation, (quotation) => quotation.user)
  quotations!: Quotation[];
}
