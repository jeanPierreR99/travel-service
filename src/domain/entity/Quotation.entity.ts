import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  ManyToOne,
  JoinTable,
} from "typeorm";
import { Service } from "./Service.entity";
import { User } from "./User.entity";

export enum Status {
  CREADO = "creado",
  RESERVADO = "reserva",
  ELIMINADO = "reserva cancelada",
}

@Entity()
export class Quotation {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({
    type: "enum",
    enum: Status,
    default: Status.CREADO,
  })
  status!: string;

  @ManyToOne(() => User, (user) => user.quotations)
  user!: User;

  @ManyToMany(() => Service, (service) => service.quotations, {
    nullable: true,
  })
  @JoinTable()
  services?: Service[];
}
