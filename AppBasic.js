/*
<div id="parent">
       <div id="child">
         <h1></h1>
       </div>
</div>
*/

import React from "react";

import ReactDOM from "react-dom/client";


const parent = React.createElement("div", { id: "parent" }, "hello worlds"

);

console.log(parent);//object
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);