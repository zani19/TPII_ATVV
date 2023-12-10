import CardCasalSimples from "./Cards/CardCasalSimples"
import CardFamiliaMais from "./Cards/CardFamiliaMais"
import CardFamiliaSimples from "./Cards/CardFamiliaSimples"
import CardFamiliaSuperior from "./Cards/CardFamiliaSuperior"
import CardSolteiroMais from "./Cards/CardSolteiroMais"
import CardSolteiroSimples from "./Cards/CardSolteiroSimples"

const ListarTiposAcomodacoes = () => {
  return (
    
        <div className='row '>          
          <div className="d-flex col-sm-4">
            <CardSolteiroSimples />           
          </div>
          <div className="d-flex col-sm-4">
            <CardSolteiroMais />           
          </div>
          <div className="d-flex col-sm-4">
            <CardCasalSimples />           
          </div>          
          <div className="d-flex col-sm-4">
            <CardFamiliaSimples />           
          </div>
          <div className="d-flex col-sm-4">
            <CardFamiliaMais />           
          </div>
          <div className="d-flex col-sm-4">
            <CardFamiliaSuperior />           
          </div>
        </div>
    


  )
}

export default ListarTiposAcomodacoes