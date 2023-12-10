import { faEye, faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import Modal from "../../components/Modal/Modal";
import { useState } from "react";
import BodyHeader from "../../components/Header/BodyHeader";

const listarDadosFicticios = [
    {
        id: '100',
        nome: 'Fulano de Tal',
        cpf: '123.456.789-00',
        telefoneDDD: '11',
        telefoneNumero: '99999-9999',
        tipoQuarto: 'Solteiro Simples',
    },
    {
        id: '101',
        nome: 'Deltrano de Tal',
        cpf: '987.654.321-00',
        telefoneDDD: '12',
        telefoneNumero: '99999-9999',
        tipoQuarto: 'Casal Simples',
    }
];

function ModalExcluir(props: { handler: any }) {
    return (
        <>
            <div className="modal-content">
                <div className="modal-body text-center align-middle">
                    <p>Deseja realmente excluir este cliente?</p>

                </div>
                <div className="text-end align-end">
                    <button
                        type="button"
                        className="btn btn-secondary me-2"
                        onClick={() => props.handler(false)}
                    >
                        Cancelar
                    </button>
                    <button type="button" className="btn btn-danger" onClick={() => {
                        // Adicione a lógica de exclusão aqui
                        // Exemplo: chame uma função para excluir o cliente pelo ID
                        // deleteCliente(cliente.id);
                        props.handler(false); // Feche o modal após a exclusão
                    }}>
                        Confirmar
                    </button>
                </div>
            </div>
        </>
    );
}

function ListarClientes(props: any) {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <Modal showModal={showModal} handler={setShowModal} header={undefined} footer={undefined}>
                <ModalExcluir handler={setShowModal} />
            </Modal>
            <div>
                <BodyHeader title={"Listar Clientes Cadastrados"} />
            </div>

            <div className="table-responsive">
                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>CPF</th>
                            <th>Nome</th>
                            <th>Telefone</th>
                            <th>Quarto</th>
                            <th>Visualizar</th>
                            <th>Editar</th>
                            <th>Excluir</th>
                        </tr>
                    </thead>
                    <tbody className="align-middle">
                        {listarDadosFicticios.map((cliente, index) => (
                            <tr  key={index}>
                                <td >{cliente.id}</td>
                                <td>{cliente.cpf}</td>
                                <td className="w-50">{cliente.nome}</td>
                                <td>{cliente.telefoneDDD} {cliente.telefoneNumero}</td>
                                <td className="w-15">{cliente.tipoQuarto}</td>
                                <td className="text-center ">
                                    <button className="btn btn-info btn-sm rounded-circle">
                                        <Link to={`/visualizarcliente/${cliente.id}`}>
                                            <FontAwesomeIcon icon={faEye} />
                                        </Link>
                                    </button>
                                </td>
                                <td className="text-center ">
                                    <button className="btn btn-secondary btn-sm rounded-circle">
                                        <Link to={`/atualizarcliente/${cliente.id}`}>
                                            <FontAwesomeIcon icon={faPenToSquare} />
                                        </Link>
                                    </button>
                                </td>
                                <td className="text-center">
                                    <button className="btn btn-danger btn-sm rounded-circle" onClick={() => setShowModal(true)}>
                                        <FontAwesomeIcon icon={faTrash} />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default ListarClientes;