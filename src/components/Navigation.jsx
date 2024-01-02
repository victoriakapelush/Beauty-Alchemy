import NavComponent from './NavComponent.jsx'

export default function Navigation() {
    return(
        <div className="nav-container flex-row">
            <NavComponent 
            href="hair"
            src="./hairNav.jpg"
            div="Hair"
            />
            <NavComponent 
            href="bodyandbath"
            src="./body-nav.jpg"
            div="Body and Bath"
            />
            <NavComponent 
            href="face"
            src="./face-nav.jpg"
            div="Face"
            />
            <NavComponent 
            href="perfumery"
            src="./perfumery-nav.jpg"
            div="Perfumery"
            />
            <NavComponent 
            href="makeup"
            src="./makeup-nav.jpg"
            div="Makeup"
            />
        </div>
    )
}