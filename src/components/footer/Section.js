import React, { Component } from "react";
class Section extends Component {
    state = {};
    render() {
        const { data } = this.props;
        return (
            <div>
                <p>{data.name}</p>
            </div>
        );
    }
}

export default Section;
