import React, { Component } from "react";
import RequestBtn from "../RequestBtn/RequestBtn";
import css from "./Footer.module.css";
import logo from "../../assets/images/logo.svg";
import Social from "./Social";
import Section from "./Section";
import Data from "../../api/Data";

class Footer extends Component {
    render() {
        return (
            <div className={`${css.body}`}>
                <div className="container">
                    <div className="d-flex justify-content-between">
                        <div className="d-flex flex-column">
                            <img src={logo} alt="" srcSet="" />
                            <div>
                                {Data.socialMedia().forEach((data) => {
                                    <Social data={data} />;
                                })}
                            </div>
                        </div>
                        <div>
                            <ul>
                                {Data.sectionData().forEach((data) => {
                                    <li>
                                        <Section data={data} />;
                                    </li>;
                                })}
                            </ul>
                        </div>

                        <div>
                            <RequestBtn />
                            <p>© EasyBank All Rights Reserved</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;
