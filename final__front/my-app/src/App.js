import "./components/About";
// подключение лого для шапки
import logo from './logo.svg'; 
// подключение футера
import Footer from './components/Footer';
// подключение главной страницы
import HomePage from "./components/HomePage";
// подключение страницы блога
import Blog from "./components/Blog";
import {
  BrowserRouter as Router,
  Link,
  Routes,
  Route
} from "react-router-dom";
import React, { Fragment } from "react";
// подключение axios для получения контента Wordpress
import axios from "axios";
// подключение страницы "Обо мне"
import About from "./components/About";
// подключение глобального css веб-сайта
import "./App.css";
// подключение css bootstrap
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

export default class App extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
          pages: [],
          posts: []
      };
  }
// получение всех страниц Wordpress
  getAllPages = async () => {
      let res = await axios.get(
          `https://diet.p-host.in/final/?rest_route=/wp/v2/pages`
      );
      let { data } = await res;

      this.setState({ pages: data });
  };
// получение всех постов Wordpress
  getAllPosts = async () => {
        let res = await axios.get(
            `https://diet.p-host.in/final/?rest_route=/wp/v2/posts`
        );
        let { data } = await res;
        this.setState({ posts: data });
    };
// подключение функций
componentDidMount = async () => {
        await this.getAllPages();
        await this.getAllPosts();
        document.title = "Dev_mechanic"
        
    };
    

  render() {
    const { pages } = this.state;

    return (
      <Router>
        < div className="container">
        <Fragment>
          {/* шапка сайта */}
            <header className="header">
              <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                  <Link to={"/"} className="navbar-brand">
                    <img className="navbar-logo" src={logo} />
                    Dev_mechanic
                    </Link>
                  <div className="navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mb-2 mb-lg-0">
                      <div className="nav-item">
                            <Link to={"/"}>Главная</Link>
                        {pages.map((page, index) => {
                            return <Link key={index} to={page.slug}>{page.title.rendered}</Link>;
                        })}
                      </div>
                    </ul>
                  </div>
                </div>
              </nav>
            </header>


                {/* роутинг SPA */}
                      <Routes>
                        {pages.map((page, index) => {
                        return (
                        <Route
                            exact
                            key={index}
                            path={`/${page.slug}`}
                            element={<About page={page} />}
                        />
                        );
                      })}
                      </Routes>
                      <Routes>
                        <Route index
                                exact
                                path={`/`}
                                element={<HomePage/>}
                            />
                      </Routes>
                      <Routes>
                        <Route index
                                exact
                                path={`/blog`}
                                element={<Blog posts={this.state.posts} />}
                            />
                      </Routes>

            </Fragment>
            < Footer />
        </div>
      </Router>

    );
    
}
}