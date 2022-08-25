import react, { Component } from "react";
import css from "./ShortStory.module.css";
class ShortStory extends Component {
    state = {};
    render() {
        return (
            <div>
                <h2 className={`${css.title}`}> Next generation digital banking</h2>
                <p className={`${css.description}`}>
                    Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving,
                    budgeting, investing, and much more.
                </p>
            </div>
        );
    }
}

export default ShortStory;
