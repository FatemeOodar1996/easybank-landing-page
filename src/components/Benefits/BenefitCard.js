import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import css from "./BenefitCard.module.css";

class BenefitCard extends Component {
    render() {
        const { data } = this.props;
        return (
            <>
                <Card className={` ${css.cardBody}`}>
                    <Card.Img variant="top" src={data.image} className={`${css.image}`} />
                    <Card.Body className={`${css.pl}`}>
                        <Card.Title className={`${css.title}`}>{data.title}</Card.Title>
                        <Card.Text className={`${css.description}`}>{data.description}</Card.Text>
                    </Card.Body>
                </Card>
            </>
        );
    }
}

export default BenefitCard;
