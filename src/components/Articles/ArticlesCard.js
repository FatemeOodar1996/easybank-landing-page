import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import css from "./ArticlesCard.module.css";
class ArticleCard extends Component {
    render() {
        const { data } = this.props;
        return (
            <Card className="css.body">
                <Card.Img variant="top" src={data.image} className={` ${css.picture}`} />
                <Card.Body>
                    <h2 className={`${css.writer}`}>{data.writer}</h2>
                    <Card.Title>{data.title}</Card.Title>
                    <Card.Text className="css.text">{data.description}</Card.Text>
                </Card.Body>
            </Card>
        );
    }
}

export default ArticleCard;
