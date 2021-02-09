const Pet = ({name, animal, breed}) => {
    return React.createElement("div", {}, [
        React.createElement("h1", {}, name),
        React.createElement("h2", {}, animal),
        React.createElement("h3", {}, breed)
    ]);
};


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

ReactDOM.render(React.createElement(App),
    document.getElementById("root")
);