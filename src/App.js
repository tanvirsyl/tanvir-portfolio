import "./App.css"
import Profile_data from "./comp/profile_data"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Skill from "./comp/Skill"
import Project from "./comp/Project"
function App() {
  return (
    <div className='app'>
      <Router>
        <Switch>
          <Route exact path='/'>
            {" "}
            <Profile_data />{" "}
          </Route>
          <Route exact path='/skill'>
            {" "}
            <Skill />{" "}
          </Route>
          <Route exact path='/project'>
            {" "}
            <Project />{" "}
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
