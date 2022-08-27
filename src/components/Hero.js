import React, { Component } from "react";
import ShortStory from "./ShortStory";
import mockup from "../assets/images/image-mockups.png";
import RequestBtn from "./RequestBtn/RequestBtn";
import css from "./Hero.module.css";
import Data from "../api/Data";

class Hero extends Component {
    render() {
        console.log(Data.heroShortStory());
        return (
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
                        <div className="col-md-7 col-12">
                            <img className={`${css.mockup}`} src={mockup} alt="" srcset="" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Hero;
