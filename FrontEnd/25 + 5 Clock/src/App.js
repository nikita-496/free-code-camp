import React, { Component } from "react";
import Control from "./Control";

class App extends Component {
    render() {
        return(
            <div className = "app-container" id = "app">
                <h2 className = "main-title">25 + 5 Clock</h2>
                <Control/>
            </div>
        )
    }
}

export default App


