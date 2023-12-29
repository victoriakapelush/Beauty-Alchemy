import { Link } from 'react-router-dom';

export default function NavComponent(props) {
    return (
        <div className="image-border">
            <a href={props.href}>
                <div className="nav-image-container flex-column">
                    <img className="nav-image" src={props.src}></img>
                </div>
                <div>
                    <div className="nav-text">{props.div}</div>
                </div>
            </a>
        </div>
    )
}