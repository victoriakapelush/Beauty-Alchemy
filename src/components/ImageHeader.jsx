import { Link, Outlet } from 'react-router-dom';

export default function ImageHeader(props) {
    return(
        <div className="image-header-container flex-row">
            <div>
                <Link to={props.to} className="link flex-row">
                    <div className="div flex-row image-header-link">
                        <img src="https://assets.website-files.com/630e76151b18f0773c9bd0fb/632067f99a7338287d0876cf_info.svg"></img>
                        <div className="link-text">{props.section}</div>
                    </div>
                </Link>
            </div>
            <div>
                <a href="#" className="link flex-row">
                    <div className="div flex-row image-header-link">
                        <div className="cart-item-number">0</div>
                        <div className="link-text cart">Cart</div>
                    </div>
                </a>
            </div>
        </div>

    )
}