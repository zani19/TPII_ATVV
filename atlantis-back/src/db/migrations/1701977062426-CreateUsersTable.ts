import { MigrationInterface, QueryRunner, Table, TableColumn, TableForeignKey } from "typeorm"

export class CreateClientesTable1234567890123 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'clientes',
                columns: [
                    {
                        name: 'id',
                        type: 'varchar',
                        isPrimary: true,
                        generationStrategy: 'increment',
                    },
                    {
                        name: 'nome',
                        type: 'varchar',
                        length: '255',
                        isNullable: false,
                    },
                    {
                        name: 'nomeSocial',
                        type: 'varchar',
                        length: '255',
                        isNullable: false,
                    },
                    {
                        name: 'email',
                        type: 'varchar',
                        length: '100',
                        isNullable: false,
                    },
                    {
                        name: 'dnasc',
                        type: 'date',
                        isNullable: false,
                    },
                    {
                        name: 'cpf',
                        type: 'varchar',
                        length: '14',
                        isNullable: false,
                        isUnique: true,
                    },
                    {
                        name: 'rg',
                        type: 'varchar',
                        length: '14',
                        isNullable: true,
                    },
                    {
                        name: 'passaporte',
                        type: 'varchar',
                        length: '20',
                        isNullable: true,
                        isUnique: true,
                    },                    
                    {
                        name: 'created_at',
                        type: 'timestamp',
                        isNullable: false,
                        default: 'CURRENT_TIMESTAMP',
                    },
                                        
                ]
            })
        )
    }
      
        public async down(queryRunner: QueryRunner): Promise<void> {         
            await queryRunner.dropTable('clientes');
        }
      }