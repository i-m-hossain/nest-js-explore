import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './User';

@Entity('user_posts')
export class Post {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;
  @Column()
  title: string;
  @Column()
  description: string;
  @ManyToOne(() => User, (user) => user.posts)
  user: User;
}
