import React, {Component, ReactDOM} from 'react';
import './App.css';
import {
    ThemeProvider, createTheme, Arwes, Button, Row, Col, Loading,
    withStyles, Image, Footer, Header, Frame, createResponsive, Logo, Project, Words
} from '@arwes/arwes';
import {SoundsProvider, createSounds} from '@arwes/sounds';

import {darken, lighten} from 'polished';
import {inspect} from "util";

const sounds: SoundsProvider = {
    shared: {volume: 1},
    players: {
        click: {
            sound: {src: ['/sounds/click.mp3']},
        },
        typing: {
            sound: {src: ['/sounds/typing.mp3']},
            settings: {oneAtATime: true},
        },
        deploy: {
            sound: {src: ['/sounds/deploy.mp3']},
            settings: {oneAtATime: true},
        },
    },
};

const accent = 0.2;

const generateColor = color => ({
    base: color,
    light: lighten(accent, color),
    dark: darken(accent, color)
});


const myTheme = {
    // color: {
    //     primary: {
    //         base: '#be26fc',
    //         dark: '#8e1bbd',
    //         light: '#c95bf6'
    //     },
    //     secondary: generateColor('#df9527'),
    //
    //     header: {
    //         base: '#fc26fa',
    //         dark: '#a818a7',
    //         light: '#f458f2'
    //     }
    // }
};


const mystyle = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Arial"
};

const headerStyle = {
    padding: [0, 0, 0, 0],
    textAlign: "center",
    fontSize: "30px"
};

const centreAligned = {
    alignContent: "center",
    justifyContent: 'center',
    justifyItems: "center",
    marginRight: "10px",
    padding: 100,
}

const resources = {
    bg: '/static/img/background.jpg',
    pattern: '/static/img/glow.png',
};

const buttonStyle = {
    margin: "10px 10px 10px 20px"
}

export class TitledArwes extends Component {
    componentDidMount() {
        document.title = 'MarkSheehan.Net';
    }

    render() {
        return App();
    }
}

const App = (): JSX.Element => (

    <ThemeProvider theme={createTheme(myTheme)}>
        <Arwes
            animate show
            background="/images/background.jpg"
            pattern="/images/glow.png">

            <div>
                <Header style={headerStyle}>
                    <h1>MarkSheehan.Net</h1>
                </Header>
            </div>

            <div style={{paddingLeft: 200, paddingRight: 200, paddingTop: 10, justifyContent: 'center', textAlign: 'center'}}>
                <Project
                    level={3}
                    corners={4}
                    animate={true}
                    style={{textJustify: 'center'}}
                    header="hello I'm Mark Sheehan and welcome to my website">
                    <div style={{margin: '0 auto', padding: 20, maxWidth: 300}}>
                        <Image animate resources='/images/wallpaper.jpg'>
                            The vast universe around us
                        </Image>
                    </div>
                    <h3><Words animate>A cyberpunk UI project</Words></h3>
                    <h3><Words>More Words</Words></h3>
                    <Words animate={true}>
                        Hello. I'm Mark and welcome to my site.
                        Here are a few links to my github repositories.
                        loresngdusiognsdouigoesjgkopsdjgpds
                    </Words>

                    <div>
                        <SoundsProvider sounds={createSounds(sounds)}>
                            <Button style={buttonStyle} animate show>This needs space</Button>
                        </SoundsProvider>
                        {' '}
                        <link rel="stylesheet" href="css/font-awesome.min.css"/>
                        <SoundsProvider sounds={createSounds(sounds)}>
                            <Button style={buttonStyle} animate>
                                
                                <li><a href="https://www.instagram.com/m.c.sheehan">
                                    <i className="fa fa-instagram"></i>
                                </a>
                                </li>
                            </Button>
                        </SoundsProvider>
                    </div>
                </Project>
            </div>

            <div style={{padding: 20}}>
                <Footer animate>
                    <p>(C) Mark Sheehan 2020</p>
                </Footer>
            </div>

        </Arwes>
    </ThemeProvider>
);


export default App;
