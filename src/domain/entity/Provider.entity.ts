import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Service } from "./Service.entity";

@Entity()
export class Provider {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @OneToMany(() => Service, (service) => service.provider)
  services!: Service[];
}
