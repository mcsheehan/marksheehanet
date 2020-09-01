import React, { Component } from 'react';
import { navigate } from '@reach/router';
import './opening.css';

/**
 *  Star Wars opening was forked and transformed to React component from Christopher Kade code and here is the link to his amazing article
 *  https://dev.to/christopherkade/developing-the-star-wars-opening-crawl-in-htmlcss-2j9e
 */

const audio = new Audio('/sounds/theme.mp3');
const title = 'Episode I';
const subtitle = "THE SHEEHAN MENACE";
const content =
    'Badgers have invaded the planet causing turmoil in their wake.\n' +
    'Legendary companies have taken pity known on the individual known as Mark Sheehan and offer him jobs\n' +
    'for a pretty crap portfolio website that is clearly just a rip off of a well known televisual entertainment show.\n' +
    'None the less we continue\n';

class Opening extends Component {

    private autoplay: NodeJS.Timeout;

    componentDidMount() {
        this.autoplay = setTimeout(() => {
            audio.play();
        }, 2000);
        // this.redirectToHunters = setTimeout(() => {
        //     this.skipOnboarding();
        // }, 65000);
    }
    componentWillUnmount() {
        clearTimeout(this.autoplay);
        // clearTimeout(this.redirectToHunters);
        audio.pause();
        audio.currentTime = 0;
    }
    skipOnboarding = () => {
        navigate('/hunters');
    };
    render() {
        // console.log(this.audio);
        return (
            <div className="container">
                <div className="skip-onboarding" onClick={this.skipOnboarding}>
                    Skip >
                </div>

                <section className="intro">
                    <p>
                        A long time ago, in a galaxy far,
                        <br />
                        far away....
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
                                <tspan x="32.8300781" y="339">
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
                        <br />
                        <p>{content}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Opening;