import AppLogo from "./AppLogo";

export default function AppBanner({ banner_title, banner_text, show_logo, children }) {
    return (
        <div className="banner">
            {show_logo && <AppLogo size={75} />}
            <h1>{banner_title}</h1>
            {banner_text && <p>{banner_text}</p>}

            <div className="cta_buttons">
                <button>{children}</button>
            </div>
        </div>
    )
}