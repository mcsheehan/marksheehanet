import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import './index.css';
import * as serviceWorker from './serviceWorker';
import styled from 'styled-components';
import { ThemeProvider, createTheme, Arwes } from '@arwes/arwes';
import { SoundsProvider, createSounds } from '@arwes/sounds';

import Opening from "./pages/Opening/Opening";

const StyledContainer = styled.div`
  margin: 30px;
`;

const Nav = () => (
    <div className="Header">
        <Link to="/opening">Launch</Link> &nbsp;
        <a href="/pokemon"> Pokemon</a>
    </div>
);

const HomePage = () => <h1>Home Page</h1>;

class App extends Component {
    componentDidMount() {
        document.title = 'Hello everyone I\'m Mark Sheehan';
    }
    render() {
        return (
            <Router basename={'/'}>
                <div>
                    <Nav />
                    <Route path="/" component={HomePage} />
                    <Route path="/opening" component={Opening} />
                </div>
            </Router>
        );
    }
}

const sounds = {
    shared: { volume: 1 },
    players: {
        click: {
            sound: { src: [`${process.env.PUBLIC_URL}/sounds/click.mp3`] },
        },
        typing: {
            sound: { src: [`${process.env.PUBLIC_URL}/sounds/typing.mp3`] },
            settings: { oneAtATime: true },
        },
        deploy: {
            sound: { src: [`${process.env.PUBLIC_URL}/sounds/deploy.mp3`] },
            settings: { oneAtATime: true },
        },
    },
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
