import React, { Component } from "react";
import RequestBtn from "../RequestBtn/RequestBtn";
import css from "./Footer.module.css";
import logo from "../../assets/images/logo-white.svg";
import Data from "../../api/Data";

class Footer extends Component {
    render() {
        console.table(Data.socialMedia());
        return (
            <div className={`${css.body}`}>
                <div className="container">
                    <div className={`d-flex flex-column flex-md-row justify-content-between ${css.main}`}>
                        <div className={`d-flex flex-column justify-content-between col-md-2 col-12 ${css.partOne}`}>
                            <div>
                                <img src={logo} alt="" srcSet="" />
                            </div>
                            <div className={`d-flex justify-content-around ${css.icons}`}>
                                {Data.socialMedia().map((data) => (
                                    <a href="#">
                                        <img className="social" src={data.image} alt="" />
                                    </a>
                                ))}
                            </div>
                        </div>
                        <div className={`d-flex col-md-3 col-12 justify-content-between ${css.sections}`}>
                            <ul className={`${css.socialMedia}`}>
                                {Data.sectionData()
                                    .slice(0, 3)
                                    .map((data) => (
                                        <li>{data.name}</li>
                                    ))}
                            </ul>
                            <ul className={`${css.socialMedia}`}>
                                {Data.sectionData()
                                    .slice(3)
                                    .map((data) => (
                                        <li>{data.name}</li>
                                    ))}
                            </ul>
                        </div>

                        <div
                            className={`d-flex flex-column align-items-md-end align-items-center justify-content-between ${css.privacy}`}>
                            <div>
                                <RequestBtn />
                            </div>
                            <p className={`${css.privacyText}`}>© EasyBank All Rights Reserved</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;
