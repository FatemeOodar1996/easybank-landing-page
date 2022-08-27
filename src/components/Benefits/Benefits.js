import React, { Component } from "react";
import css from "./Benefits.module.css";
import ShortStory from "../ShortStory";
import BenefitCard from "./BenefitCard";
import Data from "../../api/Data";

class Benefits extends Component {
    // constructor(props) {
    //     super(props);
    // }
    render() {
        return (
            <div className="container">
                <div className={`${css.benefitsBody}`}>
                    <ShortStory
                        title={Data.benefitShortStory()[0].title}
                        description={Data.benefitShortStory()[0].description}
                    />

                    <div className="row row-cols-lg-4 row-cols-md-2 row-cols-1 gy-4 mt-2">
                        {Data.benefitData().map((data) => (
                            <div className="col" key={data.id}>
                                <BenefitCard data={data} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

export default Benefits;
