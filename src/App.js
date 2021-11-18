import React from "react";
import Days from "./Days";

import {Route} from "react-router-dom";
import Detail from "./Detail";

function App() {
  
  return (
    <div className="App">
      <Route exact path="/">
      <Days/>
      </Route>
      <Route exact path="/detail/:day" component={Detail}/>
    </div>
  );
}

export default App;
