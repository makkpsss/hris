import React from "react";
import ReactDOM from "react-dom";

const Index = () => {
    return(
        <div>
            <p>
                { "Boilerplate Setup!" }
            </p>
        </div>
    );
};



ReactDOM.render(<Index />, document.getElementById("index"));