import "./App.css"
import Header from "./Header"
import SideBar from "./SideBar"
import RecommendedVideos from "./RecommendedVideos"

function App() {
  return (
    <div className="app">
      <Header />

      <div className="app__page">
        <SideBar />
        <RecommendedVideos />
      </div>
    </div>
  )
}

export default App
