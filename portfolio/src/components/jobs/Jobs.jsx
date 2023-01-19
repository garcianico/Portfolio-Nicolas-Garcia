import './Jobs.css'
import Button from '../button/Button.jsx';

export function Jobs() {
    
    return(
        <div className="container-jobs">
            <div className="job">
                <h4>SIGE, Training Front-End</h4>
                <h6>AGOSTO 2022 - DICIEMBRE 2022</h6>
                <h6>Se realizó pagina Aplicación Web para una ONG ficticia.</h6>
                <h6>Tecnologías/Librerías usadas: React - JS - HTML - CSS - Formik - Yup - React-Router - AXIOS - Jira - GitHub.</h6>
            </div>
            <div className="job">
                <h4>SIGE, Córdoba Argentina</h4>
                <h5>Software Developer</h5>
                <h6>MARZO 2021 - ACTUALIDAD</h6>
                <h6>Desarrollo de software de gestión para empresas de logística, administración, loteos, entre otras.</h6>
                <h6>Tecnologías usadas: VBA 6 - SQL Server.</h6>
            </div>
            <div className="job">

            </div>
            <Button
                className="App"
                scale={1.5}
                tollerance={0.8}
                speed={0.5}
                borderRadius="30px"
                onClick={() => {
                    console.log("click");
                }}
            ></Button>
        </div>
    )
}