import NavComponent from './NavComponent.jsx'

export default function Navigation() {
    return(
        <div className="nav-container flex-row">
            <NavComponent 
            src="./hairNav.jpg"
            div="Hair"
            />
            <NavComponent 
            src="./body-nav.jpg"
            div="Body and Bath"
            />
            <NavComponent 
            src="./face-nav.jpg"
            div="Face"
            />
            <NavComponent 
            src="./perfumery-nav.jpg"
            div="Perfumery"
            />
            <NavComponent 
            src="./makeup-nav.jpg"
            div="Makeup"
            />
        </div>
    )
}