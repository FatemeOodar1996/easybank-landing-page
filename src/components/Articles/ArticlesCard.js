import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import css from "./ArticlesCard.module.css";
class ArticleCard extends Component {
    render() {
        const { data } = this.props;
        return (
            <Card className={`${css.body}`}>
                <div className={`${css.imageParent}`}>
                    <Card.Img variant="top" src={data.image} className={`${css.picture}`} />
                </div>
                <Card.Body>
                    <h2 className={`${css.writer}`}>{data.writer}</h2>
                    <Card.Title className={`${css.title}`}>{data.title}</Card.Title>
                    <Card.Text className={`${css.description}`}>{data.description}</Card.Text>
                </Card.Body>
            </Card>
        );
    }
}

export default ArticleCard;
