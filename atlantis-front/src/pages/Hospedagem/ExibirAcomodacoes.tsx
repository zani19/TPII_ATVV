import CardCasalSimples from "../../components/Cards/CardCasalSimples"
import CardFamiliaMais from "../../components/Cards/CardFamiliaMais"
import CardFamiliaSimples from "../../components/Cards/CardFamiliaSimples"
import CardFamiliaSuperior from "../../components/Cards/CardFamiliaSuperior"
import CardSolteiroMais from "../../components/Cards/CardSolteiroMais"
import CardSolteiroSimples from "../../components/Cards/CardSolteiroSimples"
import BodyHeader from "../../components/Header/BodyHeader"

const ExibirAcomodacoes = () => {
    return (
        <>
        <BodyHeader title={"Acomodações Disponíveis"}/>
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
        </>




    )
}

export default ExibirAcomodacoes