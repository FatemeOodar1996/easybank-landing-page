import React, { Component } from "react";
import css from "./RequestBtn.module.css";
import Button from "react-bootstrap/Button";

class RequestBtn extends Component {
    render() {
        return (
            <Button className={`${css.requestBtn}`} variant="outline-success">
                Request Invite
            </Button>
        );
    }
}

export default RequestBtn;
