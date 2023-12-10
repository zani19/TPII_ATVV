import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, OneToOne, JoinColumn } from 'typeorm';
import Endereco from './Endereco';

@Entity('clientes')
class Cliente {
  @PrimaryGeneratedColumn('increment')
  id: string;

  @Column('varchar', { length: 255 })
  nome: string;

  @Column('varchar', { length: 255 })
  nomeSocial: string;

  @Column('varchar', { length: 100 })
  email: string;

  @Column('varchar', { length: 100 })
  dnasc: string;

  @Column('varchar', { length: 14 })
  cpf: string;
  
  @Column('varchar', { length: 14 })
  rg: string;
  
  @Column('varchar', { length: 14 })
  passaporte: string;

  @OneToOne(() => Endereco)
    @JoinColumn({ name: 'endereco_id' })
    endereco: Endereco;

  @CreateDateColumn()
  created_at: Date;

}

export default Cliente;
