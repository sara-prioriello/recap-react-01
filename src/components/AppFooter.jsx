export default function AppFooter({ learn_menu, api_menu, community_menu, other_links }) {

    console.log(learn_menu);
    return (<footer>
        <div className="container">
            <div className="row">

                <div className="col">
                    <h3>Meta Open Sorce</h3>
                    <ul className="meta">
                        <li>Copyright @ Meta Platform</li>
                        <li>uwu?</li>
                    </ul>
                </div>
                <div className="col">
                    <h3>Learn React</h3>
                    <ul>
                        {
                            learn_menu.map(item => (

                                <li key={item.id}>
                                    <a href={item.path}>{item.text}</a>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className="col">
                    <h3>Api Reference</h3>
                    <ul>
                        {
                            api_menu.map(item => (

                                <li key={item.id}>
                                    <a href={item.path}>{item.text}</a>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className="col">
                    <h3>Community</h3>
                    <ul>
                        {
                            community_menu.map(item => (

                                <li key={item.id}>
                                    <a href={item.path}>{item.text}</a>
                                </li>

                            ))
                        }
                    </ul>
                </div>
                <div className="col">
                    <h3>More</h3>
                    <ul>
                        {
                            other_links.map(item => (

                                <li key={item.id}>
                                    <a href={item.path}>{item.text}</a>
                                </li>

                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>

    </footer>)
}