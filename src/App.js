import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Benefits from "./components/Benefits/Benefits";
import Articles from "./components/Articles/Articles";

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }
    render() {
        return (
            <div>
                <Navbar />
                <Hero />
                <Benefits />
                <Articles />
            </div>
        );
    }
}

export default App;
