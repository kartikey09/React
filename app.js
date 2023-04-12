import React from 'react';
import ReactDOM from 'react-dom';


const root = ReactDOM.createRoot(document.getElementById("root"));
const parent1 = React.createElement("h1", {id: 'hi'}, "children")
root.render(parent1);