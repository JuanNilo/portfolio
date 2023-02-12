import { Link } from "@remix-run/react"
export default function Layout(){
    return(
        <div className="layout">
            <Link className="btn btn-home" to='/'>Home</Link>
            <Link className="btn btn-project" to='/projects'>Proyectos</Link>
            <Link className="btn btn-contact" to='/contact'>Contacto</Link>
        </div>
    )
}