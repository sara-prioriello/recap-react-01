import AppLogo from "./AppLogo";

export default function AppHeader({ menu }) {

    console.log(menu);
    return (
        <header>
            <AppLogo />
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
