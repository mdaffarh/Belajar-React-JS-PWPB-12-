import "./App.css"
import Intro from "./component/Intro"
import BestGame from "./component/BestGame"
import NavigationBar from "./component/NavigationBar"
import TrendingGame from "./component/TrendingGame"

import "./style/landingPage.css"

function App() {
  return (
    <div>
      <div className="myBG">
        <NavigationBar />
        <Intro />
      </div>

      <div className="trending">
        <TrendingGame />
      </div>

      <div className="best">
        <BestGame />
      </div>
    </div>
  )
}

export default App
