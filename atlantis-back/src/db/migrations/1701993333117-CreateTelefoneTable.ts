import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class CreateTelefoneTable1701993333117 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'telefone',
                columns: [
                    {
                        name: 'id',
                        type: 'varchar',
                        isPrimary: true,
                        generationStrategy: 'increment',
                    },
                    {
                        name: 'tipo',
                        type: 'varchar',
                        length: '8',
                        isNullable: false,
                    },
                    {
                        name: 'ddd',
                        type: 'varchar',
                        length: '2',
                        isNullable: false,
                    },
                    {
                        name: 'numero',
                        type: 'varchar',
                        length: '9',
                        isNullable: false,
                    },
                    {
                        name: 'created_at',
                        type: 'timestamp',
                        default: 'CURRENT_TIMESTAMP',
                    }, 
                    {
                        name: 'cliente_id',
                        type: 'int',
                        isNullable: false,
                    },
                ],
                foreignKeys: [
                    {
                        name: "fk_cliente",
                        columnNames: ["cliente_id"],
                        referencedColumnNames: ["id"],
                        referencedTableName: "clientes"
                    }
                ]
                
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {        
        await queryRunner.dropTable('telefone');
    }
}
