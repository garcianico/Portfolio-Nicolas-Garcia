import { Jobs } from '../jobs/Jobs';
import './Home.css'
import fotoNico from './imgNico.jpeg';

export function Home() {

    return(
        <>  
            <div className="name">
                <img src={fotoNico} alt="Nicolás Garcia" />
                <h1>Nicolás Garcia</h1>
            </div>
            <p>Mi nombre es Nicolás Garcia. Tengo 27 años. Vivo en Córdoba, Argentina. Soy Desarrollador de Software y soy un apasionado por la 
                tecnología y eso me llevó a ingresar en este mundo de la programación. Actualmente estoy en la búsqueda de nuevos desafíos que me ayuden a expandir mis conocimientos.</p>
            <Jobs />
        </>
    )
}