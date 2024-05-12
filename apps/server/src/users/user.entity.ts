import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid', {
    comment: 'Unique identifier for the user',
  })
  id: number;

  @Column({ unique: true })
  username: string;

  @Column({ unique: true })
  email: string;

  @Column({ unique: false })
  password: string;

  @Column({ default: 'user' })
  role: string;

  @Column({ default: 0 })
  isActive: boolean;
}
