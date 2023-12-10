import { title } from "process"
import FormularioClienteUpdate from "../../components/Cliente/FormularioClienteUpdate"
import BodyHeader from "../../components/Header/BodyHeader"

const AtualizarCliente = () => {
  return (
    <>
      <div>
        <BodyHeader title={"Atualizar Cliente"}/>
      </div>
      <FormularioClienteUpdate />
    </>

  )
}

export default AtualizarCliente