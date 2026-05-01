import AppBanner from "./AppBanner";

export default function AppMain({ banner_title }) {
    return (
        <main>
            <AppBanner banner_title={banner_title} show_logo={true}>
                <a href="" className="btn btn-primary">Get started</a>

            </AppBanner>


        </main>
    )
}