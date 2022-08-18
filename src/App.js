import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Person from "./components/Person";
import Navbar from "./components/Navbar"

class App extends React.Component {
    render() {
        return (
            <div>
                <Navbar />
                <Person />
            </div>
        );
    }
}

export default App;
