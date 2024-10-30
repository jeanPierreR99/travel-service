import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  ManyToOne,
} from "typeorm";
import { Category } from "./Category.entity";
import { Quotation } from "./Quotation.entity";
import { Provider } from "./Provider.entity";

@Entity()
export class Service {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column()
  description!: string;

  @Column()
  price!: number;

  @ManyToMany(() => Quotation, (quotation) => quotation.services)
  quotations!: Quotation[];

  @ManyToOne(() => Category, (category) => category.services)
  category!: Category;

  @ManyToOne(() => Provider, (provider) => provider.services)
  provider!: Provider;
}
