import React from 'react';
import ReactDOM from 'react-dom/client';

const heading = React.createElement(
    "div",
    {id:"parent"},[
    React.createElement("div",{id:"child1"},[
        React.createElement("h1",{},"i m an h1 tag of child1"),
        React.createElement("h2",{},"i am an h2 tag of child1")
    ]),
    React.createElement("div",{id:"child2"},[
        React.createElement("h1",{},"i m an h1 tag of child2"),
        React.createElement("h2",{},"i am an h2 tag of child2")
    ]),
]);

    console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));

        root.render(heading);