import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ProductEntity } from './products.entity';
import { PurchaseEntity } from './purchases.entity';

@Entity('user')
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstname: string;

  @Column()
  lastname: string;

  @Column()
  email: string;

  @Column({ unique: true })
  username: string;

  @Column()
  password: string;

  @Column({ default: "customer"})
  role: string;

  @OneToMany(() => ProductEntity, (product) => product.customer)
  products: ProductEntity[]

  @OneToMany(() => PurchaseEntity, (purchase) => purchase.customer)
  purchases: PurchaseEntity[]
}