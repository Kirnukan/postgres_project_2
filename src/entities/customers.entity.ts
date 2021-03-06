 import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
 import {
  validate,
  validateOrReject,
  Contains,
  IsInt,
  Length,
  IsEmail,
  IsFQDN,
  IsDate,
  Min,
  Max,
  IsPhoneNumber,
} from 'class-validator';


@Entity('customers')
export class CustomersEntity extends BaseEntity  {
  @PrimaryGeneratedColumn()
  id!: number;

  @Length(4, 64)
  @IsEmail()
  @Column({
    type: 'varchar',
    nullable: false,
    unique: true
  })  
  email!: string;

  @IsPhoneNumber()
  @IsInt()
  @Column({
    type: 'numeric',
    nullable: false,
    unique: true
  })  
  phone!: number;
  
  @Length(1, 64)
  @Column({
    type: 'varchar',
    nullable: false
  })  
  firstName!: string;
  
  @Length(1, 64)
  @Column({
    type: 'varchar',
    nullable: false
  })  
  lastName!: string;
}
