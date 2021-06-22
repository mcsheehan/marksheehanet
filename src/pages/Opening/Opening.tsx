import React, {Component} from 'react';
import {navigate} from '@reach/router';
import './opening.css';

/**
 *  Star Wars opening was forked and transformed to React component from Christopher Kade code and here is the link to his amazing article
 *  https://dev.to/christopherkade/developing-the-star-wars-opening-crawl-in-htmlcss-2j9e
 */

const audio = new Audio(`${process.env.PUBLIC_URL}/sounds/theme.mp3`);
const title = 'Episode I';
const subtitle = "THE SHEEHAN MENACE";

const content = <React.Fragment>
    <p>Badgers have invaded <b>the</b> planet causing turmoil in their wake.</p>
    <p>Legendary heroes have arisen to combat the badgers by getting ripped</p>
    <p>These ripped heroes will use their powers of github and instantgram to increase their core strength state and
        eschew the badgers into the void of chaos.</p>
    <p>Help us Mark Sheehan you are kewl and you getting your core strength stat to 18 is our only hope</p>
    <p>.</p>
    <p>.</p>
    <p>This is really a bit of an oversell for a portfolio website</p>
    <p>.</p>
    <p>.</p>
    <p>.</p>
    <p>.</p>
    <p>.</p>
    <p>It kind of goes on a bit really</p>
    <p>.</p>
    <p>.</p>
    <p>MEGA BADGER WARS HUZZAH!</p>
    <p></p>
</React.Fragment>;


class Opening extends Component {
    private autoplay: NodeJS.Timeout;
    private redirectToMainSite: NodeJS.Timeout;

    componentDidMount() {
        this.autoplay = setTimeout(() => {
            audio.play();
        }, 0);
        this.redirectToMainSite = setTimeout(() => {
            this.skipIntro();
        }, 15000);
    }

    componentWillUnmount() {
        clearTimeout(this.autoplay);
        // clearTimeout(this.redirectToHunters);
        audio.pause();
        audio.currentTime = 0;
    }

    skipIntro = () => {
        navigate('/pokemon');
    };

    render() {
        // console.log(this.audio);

        return (
            <div className="container">
                <div className="skip-onboarding" onClick={this.skipIntro}>
                    Skip >
                </div>

                <section className="intro">
                    <p>
                        Not very long ago on a planet
                        <br/>
                        really quite near....
                    </p>
                </section>

                <section className="logo">
                    <svg width="738px" height="341px" viewBox="0 0 738 341" version="1.1">
                        <g
                            stroke="none"
                            strokeWidth="1"
                            fill="none"
                            fillRule="evenodd"
                            fontFamily="SFDistantGalaxyOutline"
                            fontSize="200"
                            fontWeight="normal"
                        >
                            <text id="QLEAN-WARS" fill="#FFE81F">
                                <tspan x="-1.30078125" y="135">
                                    BADGER
                                </tspan>
                                <tspan x="32.8300781" y="360">
                                    WARS
                                </tspan>
                            </text>
                        </g>
                    </svg>
                </section>
                <div id="board">
                    <div id="content">
                        <p id="title">{title}</p>
                        <p id="subtitle">{subtitle}</p>
                        <br/>
                        {content}
                    </div>
                </div>
            </div>
        );

    }
}

export default Opening;
