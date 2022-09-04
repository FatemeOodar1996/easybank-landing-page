import React, { Component } from "react";
import ArticleCard from "./ArticlesCard";
import css from "./Articles.module.css";
import Data from "../../api/Data";
class Articles extends Component {
    render() {
        return (
          <div className={`${css.body}`}>
              <div className="container">
                <h2 className={`${css.title}`}>Lastest Articles</h2>
                <div className={`row row-cols-lg-4 row-cols-md-2 row-cols-1 gy-4 mt-2 ${css.cards}`}>
                    {Data.articles().map((data) => (
                        <div className="col">
                            <ArticleCard data={data} />
                        </div>
                    ))}
                </div>
            </div>
          </div>
        );
    }
}

export default Articles;
