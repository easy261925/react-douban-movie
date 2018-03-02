import React, {Component, Fragment} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import "../assets/style/screening.css";
import screenData from "../assets/data/screenData";
import "../assets/style/screening.scss";

const screening = () => {
  return (
    <div id="screening" className="s">
      <ScreeningHd/>
      <ScreeningBd/>
    </div>
  )
}

const ScreeningHd = () => {
  return (
    <Router>
      <div className="screening-hd">
        <h2>正在热映
          <span>
            <Link to="/cinema/nowplaying/">全部正在热映»</Link>
          </span>
          <span>
            <Link to="./later/">即将上映»</Link>
          </span>
        </h2>
      </div>
    </Router>
  )
}

class ScreeningBd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      screenData: []
    }
  }

  componentDidMount() {
    this.setState({
      screenData: screenData
    })
  }

  render() {
    const screenData = this.state.screenData;
    console.log(screenData);
    const listItems = screenData.map((el,i)=>
     <ScreenItem data={el} key={i}/>
     )
    console.log(listItems);
    return (
      <ul>
       {listItems}
      </ul>
    )
  }
}

class ScreenItem extends Component {
  render() {
    const image = this.props.data.images.small;
    const title = this.props.data.title;
    return (
      <li>
        <ul>
          <li className="poster">
            <img src={image} alt={title} className="poster-img"/>
          </li>
        </ul>
      </li>
    )
  }
}

export default screening;
