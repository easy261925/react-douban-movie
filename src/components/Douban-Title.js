import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "../assets/style/douban-title.css";

class Title extends Component {
    render() {
        return(
            <Fragment>
                <div className="douban-title">
                    <header>
                        <Router>
                            <div className="nav-box">
                                <div className="nav-left">
                                    <ul>
                                        <li>
                                            <Link to="https://www.douban.com">豆瓣</Link>
                                        </li>
                                        <li>
                                            <Link to="https://book.douban.com">读书</Link>
                                        </li>
                                        <li>
                                            <Link to="https://movie.douban.com">电影</Link>
                                        </li>
                                        <li>
                                            <Link to="https://music.douban.com">音乐</Link>
                                        </li>
                                        <li>
                                            <Link to="https://www.douban.com/location">同城</Link>
                                        </li>
                                        <li>
                                            <Link to="https://www.douban.com/group">小组</Link>
                                        </li>
                                        <li>
                                            <Link to="https://read.douban.com/?dcs=top-nav&dcm=douban">阅读</Link>
                                        </li>
                                        <li>
                                            <Link to="https://douban.fm/?from_=shire_top_nav">FM</Link>
                                        </li>
                                        <li>
                                            <Link to="https://time.douban.com/?dt_time_source=douban-web_top_nav">时间</Link>
                                        </li>
                                        <li>
                                            <Link to="https://market.douban.com/?utm_campaign=douban_top_nav&utm_source=douban&utm_medium=pc_web">市集</Link>
                                        </li>
                                        <li>
                                            <Link to="#more">更多</Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="nav-info">
                                    <Router>
                                        <ul>
                                            <li>
                                                <Link to="https://www.douban.com/accounts/login?source=movie">登录</Link>
                                            </li>
                                            <li>
                                                <Link to="https://www.douban.com/accounts/register?source=movie">注册</Link>
                                            </li>
                                        </ul> 
                                    </Router>
                                </div>
                                <div className="nav-doubanapp">
                                    <Router>
                                        <ul>
                                            <li>
                                                <Link to="https://www.douban.com/doubanapp/app?channel=top-nav">下载豆瓣客户端</Link>
                                            </li>
                                        </ul> 
                                    </Router>
                                </div>
                            </div>  
                        </Router>
                    </header>
                </div>
            </Fragment>
        )
    }
}

export default Title;
