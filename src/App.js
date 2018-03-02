import React, {Component, Fragment} from "react";
import DoubanTitle from "./components/Douban-Title";
import DoubanSousuo from "./components/Douban-sousuo";
import Screening from "./components/screening";
import "./assets/style/app-class.scss";

class App extends Component {
  render() {
    return (
      <Fragment>
        <DoubanTitle/>
        <DoubanSousuo/>
        <div className="app-section">
          <Screening/>
        </div>
      </Fragment>
    )
  }
}

  export default App;