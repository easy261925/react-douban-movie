import React ,{ Component, Fragment } from "react";
import "../assets/style/douban-sousuo.css";
import logo from "../assets/image/logo.png";
import sousuo from "../assets/image/搜索.png";
import "../assets/image/j.png";

class Sousuo extends Component {
    render(){
        return(
            <Fragment>
                <div className="douban-sousuo">
                    <header>
                        <div className="logo">
                            <a href="https://movie.douban.com">
                                <img src={logo} alt=""/>
                            </a>
                        </div>
                        <div className="sousuo-search">
                            <form action="">
                                <fieldset>
                                    <div className="inp">
                                        <input id="inp-query" name="search_text" size="22"  placeholder="搜索电影、电视剧、综艺、影人" />
                                    </div>
                                </fieldset>
                            </form>
                        </div>
                        <div className="inp-btn">
                            <input type="submit" value="搜索"/>
                        </div>
                        <div className="both"></div>
                    </header>
                    <div className="douban-sousuo-hr"></div>
                </div>
            </Fragment>
        )
    }
}

export default Sousuo;
