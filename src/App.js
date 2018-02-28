<<<<<<< HEAD
import React, { Component, Fragment } from "react";
import DoubanTitle from "./components/Douban-Title";
import DoubanSousuo from "./components/Douban-sousuo";

class App extends Component {
    render() {
        return(
            <Fragment>
                <DoubanTitle />
                <DoubanSousuo />
            </Fragment>
        )
    }
=======
import React, {Component, Fragment} from 'react';
import Screening from "./components/screening";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Screening/>
      </Fragment>
    );
  }
>>>>>>> 3db87d5288deac67b97be7e5c5aad2ea5fd30d3d
}

export default App;