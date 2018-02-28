import React, {Component, Fragment} from "react";
import DoubanTitle from "./components/Douban-Title";
import DoubanSousuo from "./components/Douban-sousuo";
import Screening from "./components/screening";

class App extends Component {
  render() {
    return (
      <Fragment>
        <DoubanTitle/>
        <DoubanSousuo/>
        <Screening/>
      </Fragment>
    )
  }
}

  export default App;