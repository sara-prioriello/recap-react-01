import reactLogo from "../assets/react.svg"

export default function AppHeader({ menu }) {

    console.log(menu);
    return (
        <header>
            <div className="logo">
                <img src={reactLogo} alt="ReactLogo" />
            </div>
            <nav>
                {menu.map(item => (
                    <a href={item.path} key={item.id}>{item.text}</a>
                )
                )}

                <div>
                    <i className="bi bi-brightness-high"></i>
                </div>
            </nav>
        </header>
    )
}
