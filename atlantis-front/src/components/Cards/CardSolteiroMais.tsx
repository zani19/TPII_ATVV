import SolteiroMais from "@/assets/images/SolteiroMais.jpg"

const CardSolteiroMais = () => {
  return (
    
          <div className="col-12 mb-2">
            <div className="card shadow text-justify m-4 border">
              <img src={SolteiroMais} className="card-img-top" alt="Quarto Solteiro Simples" style={{ maxWidth: "100%", height:"14rem"}}/>
              <div className="card-body" style={{ height: "10rem"}}>
                <h5 className="card-title" >Solteiro Mais</h5>
                <p className="card-text"> Oferece cama de casal confortável, garagem privativa e todas as comodidades do quarto de solteiro simples. Perfeito para uma estadia relaxante e conveniente, unindo conforto e praticidade.</p>
              </div>
              <div className='m-3'>
                <table className='table'>
                  <thead>
                    <tr>
                      <th>Descrição</th>
                      <th className='text-center'>Quantidade</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                    <td>Cama Solteiro</td>
                    <td className='text-center'>N/A</td>
                    </tr>
                    <tr>
                    <td>Cama Casal</td>
                    <td className='text-center'>1</td>
                    </tr>
                    <tr>
                      <td>Suite</td>
                      <td className='text-center'>1</td>
                    </tr>
                    <tr>
                      <td>Garagem</td>
                      <td className='text-center'>1</td>
                    </tr>
                    <tr>
                      <td>Ar Condicionado</td>
                      <td className='text-center'>1</td>
                    </tr>
                    <tr>
                      <td>Wi-Fi de Alta Velocidade</td>                      
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="card-body">
                <a href="#" className="card-link">Reservar</a>
              </div>
            </div>
          </div>
    
  )
}

export default CardSolteiroMais