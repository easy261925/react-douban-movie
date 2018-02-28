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
}

export default App;