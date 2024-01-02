export default function Header() {
    return (
        <div className="header flex-column">
            <div className="header-container">
                <div className="heading-container">
                    <a href="/app">
                        <img src="https://assets.website-files.com/630e76151b18f0773c9bd0fb/6325c003fed41f0436e9ac07_pexels-anna-nekrashevich-7946210-transcode.mp4"></img>
                    </a>
                    <h1>Beauty Alchemy</h1>
                </div>
                <div className="links-container flex-row">
                    <a href="#" className="link flex-row">
                        <div className="div flex-row">
                            <img src="https://assets.website-files.com/630e76151b18f0773c9bd0fb/632065cbeba0815e5d8a2631_message-circle.svg"></img>
                            <div className="link-text">Message</div>
                        </div>
                    </a>
                    <a href="#" className="link flex-row">
                        <div className="div flex-row">
                            <img src="https://assets.website-files.com/630e76151b18f0773c9bd0fb/63206768eba0817f838a3cee_truck.svg"></img>
                            <div className="link-text">Deliver</div>
                        </div>
                    </a>
                    <a href="#" className="link flex-row">
                        <div className="div flex-row">
                            <img src="https://assets.website-files.com/630e76151b18f0773c9bd0fb/632067f9623a6a16dcf60937_users.svg"></img>
                            <div className="link-text">About</div>
                        </div>
                    </a>
                </div>
                <div className="paragraph">Eco-Friendly natural products <br/>for your body, face and hair.</div>
            </div>
        </div>
    )
}