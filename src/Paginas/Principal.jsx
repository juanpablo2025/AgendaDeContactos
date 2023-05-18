import Nav from "../Components/nav"
import banner from "../assets/banner.jpg"
import Card from "../Components/Card"
const Principal = () => {
	return (

		<section>
			<Nav />
			<section className="banner" >
				<img src={banner} height="400"></img>
			</section>
			<section className="columnas">
				<section className="texto">
					<center><h1>Lista de Contactos</h1></center>
					<section className="texto" id="text1">





						<p>                 La aplicación de agenda de contactos es una herramienta imprescindible para mantener tus contactos organizados y accesibles en un solo lugar. Con esta aplicación, puedes gestionar de manera eficiente toda tu lista de contactos, desde amigos y familiares hasta colegas y clientes.               ​</p>

					</section>
				</section>

				<Card />
			</section>
		</section>





	)
}

export default Principal