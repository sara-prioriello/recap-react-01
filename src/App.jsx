import AppFooter from "./components/AppFooter.jsx"
import AppHeader from "./components/AppHeader.jsx"
import AppMain from "./components/AppMain.jsx"
import { main_menu, learn_menu, api_menu, community_menu, other_links, banner_title } from "./data/app_data.js"

function App() {


  return (
    <>

      <AppHeader menu={main_menu} />
      <AppMain banner_title={banner_title} />
      <AppFooter learn_menu={learn_menu} api_menu={api_menu} community_menu={community_menu} other_links={other_links} />

    </>
  )
}

export default App
