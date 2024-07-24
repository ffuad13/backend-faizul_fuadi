import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { ProductEntity } from './products.entity';
import { UserEntity } from './users.entity';

@Entity('purchase')
export class PurchaseEntity {
	@PrimaryGeneratedColumn()
	id: number

	@ManyToOne(() => UserEntity, (customer) => customer.purchases)
	customer: UserEntity

	@ManyToOne(() => ProductEntity, (product) => product.purchases)
	product: ProductEntity

	@Column()
	purchase_quantity: number

	@Column()
	isDiscount: boolean

	@Column()
	isShippingFree: boolean

	@Column({ type: 'decimal', precision: 10, scale: 2, default: 0 })
  total_price: number;
}