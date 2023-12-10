import SolteiroSimples from "@/assets/images/SolteiroSimples.jpg"
import SolteiroMais from "@/assets/images/SolteiroMais.jpg"
import CasalSimples from "@/assets/images/CasalSimples.jpg"
import FamiliaSimples from "@/assets/images/FamiliaSimples.jpg"
import FamiliaMais from "@/assets/images/FamiliaMais.jpg"
import FamiliaSuperior from "@/assets/images/FamiliaSuperior.jpg"

const CarouselHome = () => {
    return (
        <div>
<div id="carouselExampleDark" className="carousel carousel-white slide" data-bs-ride="carousel">
<div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="3" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="4" aria-label="Slide 4"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="5" aria-label="Slide 5"></button>
  </div>
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="5000">
                        <img src={SolteiroSimples} className="d-block w-100 px-3" style={{ height: "30rem" }} alt="..." />
                        <div className="carousel-caption d-none d-md-block shadow bg-dark p-2  bg-opacity-50">
                            <h5 className="k fw-bold">Solteiro Simples</h5>
                            <p className="mx-5">Cama confortável, banheiro com chuveiro pressurizado, toalhas macias e climatização para uma estadia relaxante e revigorante. Ideal para descanso tranquilo e confortável.</p>
                        </div>
                    </div>
                    <div className="carousel-item " data-bs-interval="5000">
                        <img src={SolteiroMais} className="d-block w-100 px-3" style={{ height: "30rem" }} alt="..." />
                        <div className="carousel-caption d-none d-md-block shadow bg-dark p-2  bg-opacity-50">
                            <h5 className="k fw-bold">Solteiro Mais</h5>
                            <p className="mx-5">Oferece cama de casal confortável, garagem privativa e todas as comodidades do quarto de solteiro simples. Perfeito para uma estadia relaxante e conveniente, unindo conforto e praticidade.</p>
                        </div>
                    </div>                   
                    <div className="carousel-item " data-bs-interval="5000">
                        <img src={CasalSimples} className="d-block w-100 px-3" style={{ height: "30rem" }} alt="..." />
                        <div className="carousel-caption d-none d-md-block shadow bg-dark p-2  bg-opacity-50">
                            <h5 className="k fw-bold">Casal Simples</h5>
                            <p className="mx-5">Com todas as características do Quarto Solteiro Plus, este oferece um espaço ampliado para mais conforto. Cama de casal e garagem privativa proporcionam uma estadia relaxante e conveniente.</p>
                        </div>
                    </div>                   
                    <div className="carousel-item" data-bs-interval="5000">
                        <img src={FamiliaSimples} className="d-block w-100 px-3" style={{ height: "30rem" }} alt="..." />
                        <div className="carousel-caption d-none d-md-block shadow bg-dark p-2  bg-opacity-50">
                            <h5 className="k fw-bold">Família Simples</h5>
                            <p className="mx-5">Espaço familiar amplo com uma cama de casal e duas de solteiro, ideal para famílias. Destaque para o tamanho generoso, permitindo acomodar confortavelmente até duas camas de casal.</p>
                        </div>
                    </div>                   
                    <div className="carousel-item" data-bs-interval="5000">
                        <img src={FamiliaMais} className="d-block w-100 px-3" style={{ height: "30rem" }} alt="..." />
                        <div className="carousel-caption d-none d-md-block shadow bg-dark p-2  bg-opacity-50">
                            <h5 className="k fw-bold">Família Mais</h5>
                            <p className="mx-5">Perfeito para famílias maiores, este quarto Família Mais oferece dois espaçosos suítes, uma cama de casal, cinco camas de solteiro e duas garagens privativas. Amplo e versátil para acomodar todos com conforto.</p>
                        </div>
                    </div>                   
                    <div className="carousel-item" data-bs-interval="5000">
                        <img src={FamiliaSuperior} className="d-block w-100 px-3" style={{ height: "30rem" }} alt="..." />
                        <div className="carousel-caption d-none d-md-block shadow bg-dark p-2  bg-opacity-50">
                            <h5 className="k fw-bold">Família Superior</h5>
                            <p className="mx-5">O quarto Família Superior é um espaço excepcional, composto por três suítes, duas camas de casal e seis camas de solteiro. Oferece muito conforto, amplo espaço e privacidade para cada membro da família.</p>
                        </div>
                    </div>                   
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
            </div>
        </div>
    )
}

export default CarouselHome