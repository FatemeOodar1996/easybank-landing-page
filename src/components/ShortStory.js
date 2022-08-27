import React, { Component } from "react";
import css from "./ShortStory.module.css";
class ShortStory extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h2 className={`${css.title}`}>{this.props.title}</h2>
                <p className={`${css.description}`}>{this.props.description}</p>
            </div>
        );
    }
}

export default ShortStory;
