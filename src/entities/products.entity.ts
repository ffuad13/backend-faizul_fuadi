import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { UserEntity } from './users.entity';
import { PurchaseEntity } from './purchases.entity';

@Entity('product')
export class ProductEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  product_name: string;

	@Column({ type: 'decimal', precision: 10, scale: 2, default: 0 })
  product_price: number;

	@Column()
  product_quantity: number;

	@ManyToOne(() => UserEntity, (customer) => customer.products)
	customer: UserEntity

	@OneToMany(() => PurchaseEntity, (purchase) => purchase.product)
	purchases: ProductEntity[]
}