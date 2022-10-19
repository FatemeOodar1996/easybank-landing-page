import React, { Component } from "react";
import ShortStory from "./ShortStory";
import mockup from "../assets/images/image-mockups.png";
import bg from "../assets/images/bg-intro-desktop.svg";
import RequestBtn from "./RequestBtn/RequestBtn";
import css from "./hero.module.css";
import Data from "../api/Data";

class Hero extends Component {
    render() {
        return (
            <>
                <div className={`${css.hero}`}>
                    <div className="container">
                        <div className={`row flex-md-row flex-column-reverse`}>
                            <div className={`col-md-5 col-12 ${css.description}`}>
                                <ShortStory
                                    title={Data.heroShortStory()[0].title}
                                    description={Data.heroShortStory()[0].description}
                                />
                                <RequestBtn />
                            </div>
                            <div className={`col-md-7 col-12`}></div>
                        </div>
                    </div>
                </div>
                <img className={`${css.mockup}`} alt="" src={mockup} />
                <img className={`${css.bg}`} alt="" src={bg} />
            </>
        );
    }
}

export default Hero;
