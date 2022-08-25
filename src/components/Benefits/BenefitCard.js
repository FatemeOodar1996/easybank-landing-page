// import React, { Component } from "react";
import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import css from "./BenefitCard.module.css";
// import banking from "../../assets/images/icon-online.svg";

class BenefitCard extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { data } = this.props;
        return (
            <>
                <Card className={`${css.cardBody}`}>
                    <Card.Img variant="top" src={data.image} className={`${css.image}`} />
                    <Card.Body className={`${css.pl}`}>
                        <Card.Title className={`${css.title}`}>{data.title}</Card.Title>
                        <Card.Text className={`${css.text}`}>{data.text}</Card.Text>
                    </Card.Body>
                </Card>
            </>
        );
    }
}

export default BenefitCard;
