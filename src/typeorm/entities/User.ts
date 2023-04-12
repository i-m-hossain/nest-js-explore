<<<<<<< HEAD
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
@Entity({ name: 'users' })
=======
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
>>>>>>> bc032445c963f26aac8356b38036cee6c98f1c92
export class User {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column({ unique: true })
  username: string;

  @Column()
  password: string;

  @Column()
  createdAt: Date;

  @Column({ nullable: true })
  authStrategy: string;
}
