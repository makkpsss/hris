import React from "react";
import ReactDOM from "react-dom";
import { Fabric } from "office-ui-fabric-react/lib/Fabric";
import App from "./App";

const Index = () => {
    return(
        <Fabric><App /></Fabric>
    );
};



ReactDOM.render(<Index />, document.getElementById("index"));