import "./App.css"
import Header from "./Header"
import SideBar from "./SideBar"
import RecommendedVideos from "./RecommendedVideos"
import SearchPage from "./SearchPage"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/search/:searchTerm">
            <Header />
            <div className="app__page">
              <SideBar />
              <SearchPage />
            </div>
          </Route>
          <Route path="/">
            <Header />
            <div className="app__page">
              <SideBar />
              <RecommendedVideos />
            </div>
          </Route>
        </Switch>
      </Router>
      {/* <Header />
      <div className="app__page">
        <SideBar />
        <RecommendedVideos />
      </div> */}
    </div>
  )
}

export default App
