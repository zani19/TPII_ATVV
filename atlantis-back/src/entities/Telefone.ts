import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, CreateDateColumn, JoinColumn } from 'typeorm';
import Cliente from './Cliente';

@Entity('telefones')
class Telefone {
  @PrimaryGeneratedColumn('increment')
  id: string;

  @Column('varchar', { length: 20 })
  tipo: string; // residencial, comercial, celular, etc.

  @Column('varchar', { length: 3 })
  ddd: string;

  @Column('varchar', { length: 15 })
  numero: string;

  @CreateDateColumn()
  created_at: Date;
  @Column()
  cliente_id:string;

  @ManyToOne(() => Cliente)
  @JoinColumn({ name: "cliente_id"})
  cliente: Cliente;
}

export default Telefone;
