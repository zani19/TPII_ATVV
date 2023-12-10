import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, CreateDateColumn, JoinColumn, OneToOne } from 'typeorm';
import Cliente from './Cliente';

@Entity('enderecos')
class Endereco {
  @PrimaryGeneratedColumn('increment')
  id: string;

  @Column('varchar', { length: 100 })
  logradouro: string;

  @Column('varchar', { length: 10 })
  numero: string;

  @Column('varchar', { length: 50 })
  complemento: string;

  @Column('varchar', { length: 50 })
  bairro: string;

  @Column('varchar', { length: 50 })
  cidade: string;

  @Column('varchar', { length: 2 })
  estado: string;

  @Column('varchar', { length: 8 })
  cep: string;

  @ManyToOne(() => Cliente)
  @JoinColumn({ name: 'cliente_id' })
  cliente: Cliente; 

  @CreateDateColumn()
  created_at: Date;
}

export default Endereco;
