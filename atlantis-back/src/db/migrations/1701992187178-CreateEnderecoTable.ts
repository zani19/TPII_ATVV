import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class CreateEnderecoTable1701992187178 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'endereco',
                columns: [
                    {
                        name: 'id',
                        type: 'varchar',
                        isPrimary: true,
                        generationStrategy: 'increment',
                    },
                    {
                        name: 'cep',
                        type: 'varchar',
                        length: '8',
                        isNullable: false,
                    },
                    {
                        name: 'logradouro',
                        type: 'varchar',
                        length: '255',
                        isNullable: false,
                    },
                    {
                        name: 'numero',
                        type: 'varchar',
                        length: '10',
                        isNullable: false,
                    },
                    {
                        name: 'complemento',
                        type: 'varchar',
                        length: '100',
                        isNullable: true,
                    },
                    {
                        name: 'bairro',
                        type: 'varchar',
                        length: '100',
                        isNullable: false,
                    },
                    {
                        name: 'cidade',
                        type: 'varchar',
                        length: '100',
                        isNullable: false,
                    },
                    {
                        name: 'estado',
                        type: 'varchar',
                        length: '2',
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
        await queryRunner.dropTable('endereco');
    }
}
