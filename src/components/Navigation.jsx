import NavComponent from './NavComponent.jsx'
import { Link } from 'react-router-dom';

export default function Navigation() {
    return(
        <div className="nav-container flex-row">
            <NavComponent 
            to="hair"
            src="./hairNav.jpg"
            div="Hair"
            />
            <NavComponent 
            to="bodyandbath"
            src="./body-nav.jpg"
            div="Body and Bath"
            />
            <NavComponent 
            to="face"
            src="./face-nav.jpg"
            div="Face"
            />
            <NavComponent 
            to="perfumery"
            src="./perfumery-nav.jpg"
            div="Perfumery"
            />
            <NavComponent 
            to="makeup"
            src="./makeup-nav.jpg"
            div="Makeup"
            />
        </div>
    )
}