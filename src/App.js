import React from "react";
import { Router } from "@reach/router";
import NavBar from "./NavBar";
import { Provider as ReduxProvider } from "react-redux";
import store from "./store";
import Results from "./Results";
import Details from "./Details";
import SearchParams from "./SearchParams";

class App extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <ReduxProvider store={store}>
          <Router>
            <Results path="/" />
            <Details path="/details/:id" />
            <SearchParams path="/search-params" />
          </Router>
        </ReduxProvider>
      </div>
    );
  }
}

// render(<App />, document.getElementById("root"));
export default App;
