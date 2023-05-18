import Datos from "../assets/Contactos.json"

const datos = Datos.contactos
console.log(datos)
const Card = () => {
	return (
		<div className="card">


			{
				datos.map((dato) => (
					<section className="container">

						<h4>{dato.nombre}</h4>
						<p>{dato.telefono}</p>
						<p>{dato.email}</p>
						<p>{dato.direccion}</p>
						<p>{dato.ciudad}</p>
						<p>{dato.pais}</p>


					</section >
				))

			}

		</div >
	);
};




export default Card