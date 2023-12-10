const FormularioCadastroHospedagem = () => {

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

    const clientesOrdenados = [...listarDadosFicticios].sort((a, b) => {
        return a.nome.localeCompare(b.nome);
    });
    return (
        <>
            <form>
                <div className="mb-2">
                    <select className="form-select" aria-label="Default select example">
                        <option selected>Selecione a Acomodação</option>
                        <option value="solteiroSimples">Solteiro Simples</option>
                        <option value="solteiroMais">Solteiro Mais</option>
                        <option value="casalSimples">Casal Simples</option>
                        <option value="familiaSimples">Família Simples</option>
                        <option value="familiaMais">Família Mais</option>
                        <option value="FamiliaSuper">Família Super</option>
                    </select>
                </div>
                <div className="mb-2">
                    <select className="form-select" aria-label="Default select example">
                        <option selected>Selecione o Cliente</option>
                        {clientesOrdenados.map((cliente, index) => (
                            <option key={index} value={cliente.id}>{cliente.id} - {cliente.cpf} - {cliente.nome} </option>
                        ))}
                    </select>
                </div>
                <div className="d-flex align-items-center ">
                    <label className="form-label align-middle " htmlFor="entrada">Data Entrada:</label>
                    <input className="form-control mx-2 w-25" type="date" />
                    <label className="form-label" htmlFor="saida">Data Saída:</label>
                    <input className="form-control mx-2 w-25" type="date" />

                </div>
                <div className="d-flex my-3 align-items-center justify-content-end">
          <button className="btn btn-primary" type="submit">
            Cadastrar
          </button>
        </div>
            </form>
        </>
    )
}

export default FormularioCadastroHospedagem