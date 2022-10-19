import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css"
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Benefits from "./components/Benefits/Benefits";
import Articles from "./components/Articles/Articles";
import Footer from "./components/Footer/Footer";

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
                <Footer />
            </div>
        );
    }
}

export default App;
