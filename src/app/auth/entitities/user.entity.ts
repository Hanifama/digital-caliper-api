import { Entity, Column, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Role } from './role.entity';
import { Location } from 'src/app/location/entity/location.entity';

@Entity('user')
export class User {
  @PrimaryColumn({ type: 'varchar', length: 50 })
  user_id: string;

  @ManyToOne(() => Role, (role) => role.users, { nullable: false })
  @JoinColumn({ name: 'role_id' })
  role: Role;

  @Column({ name: 'location_id', type: 'varchar', length: 50, nullable: false })
  locationId: string;

  @Column({ type: 'varchar', length: 50, unique: true })
  username: string;

  @Column({ type: 'varchar', length: 150 })
  full_name: string;

  @Column({ type: 'varchar', length: 150 })
  name: string;

  @Column({ type: 'varchar', length: 50, unique: true })
  email: string;

  @Column({ type: 'varchar', length: 100 })
  password: string;

  @Column({ type: 'varchar', length: 16, unique: true, nullable: true })
  NIK: string;

  @Column({ type: 'varchar', length: 50, nullable: true })
  departement: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  image: string;

  @Column({ type: 'timestamp', nullable: true })
  last_login: Date;

  @Column({ type: 'int', default: 1 })
  status: number;

  @ManyToOne(() => Location, (location) => location.users, { nullable: false })
  @JoinColumn({ name: 'location_id' })
  location: Location;
}
