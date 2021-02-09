import * as React from 'react';
import {render} from 'react-dom';//import just this pack
import Pet from "./Pet";
//import ReactDOM from 'react-dom //import all


const App = () => {
    return React.createElement(
        "div",
        {id: "important"},
        [
            React.createElement("h1", {}, "Adopt Me!"),
            React.createElement(Pet, {name: "Mel", animal: "Dog", breed: "SRD"}),
            React.createElement(Pet, {name: "Mini", animal: "Dog", breed: "SRD"}),
            React.createElement(Pet, {name: "Nina", animal: "Dog", breed: "SRD"}),
            React.createElement(Pet, {name: "Doink", animal: "Cat", breed: "SRD"})
        ]
    );
};

render(React.createElement(App),
    document.getElementById("root")
);