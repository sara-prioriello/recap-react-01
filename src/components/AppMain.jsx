import AppBanner from "./AppBanner";

export default function AppMain({ banner_title }) {
    return (
        <main>
            <AppBanner banner_title={banner_title} show_logo={true}>
                <button>Click me</button>
                <button>Click me</button>
            </AppBanner>

            <AppBanner banner_title={"Lear React with us"} show_logo={false} banner_text={"Prova"}>
                <button>Click me</button>
                <button>Click me</button>
            </AppBanner>

        </main>
    )
}