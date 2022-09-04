import React, { Component } from "react";
// import css from "./Social.module.css";

class Social extends Component {
    render() {
        const { data } = this.props;
        return (
            <div>
                <img src={data.image} alt="" srcSet="" />
                <p>{data.title}</p>
            </div>
        );
    }
}

export default Social;
