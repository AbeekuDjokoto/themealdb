import Homepage from "./Home/Home";
import SearchInput from "./SearchInput/SearchInput";
import SearchResults from "./SearchResults/SearchResults";
import SearchDetails from "./SearchDetails/SearchDetails";
import NavBar from "./NavBar/NavBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { useState } from "react";

function App() {
  const [food, setFood] = useState({})
  
  return (
    <Router>
      <div className="App">
        <div className="main-container">
          <NavBar />

          <Switch>
            <Route exact path="/">
              <Homepage />
            </Route>
            <Route path="/search">
              <SearchInput setFood={setFood}/>
            </Route>
            <Route path="/searchresult">
             <SearchResults setFood={setFood} food={food}/>
            </Route>
            <Route path="/singlemeal/:id">
             <SearchDetails />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
