/*
<div id="parent">
       <div id="child">
         <h1></h1>
       </div>
</div>
*/


const parent=React.createElement("div",{id:"parent"},
    React.createElement("div",{id:"child"},
    React.createElement("h1",{className:"new"},"Hello World")
    )
);

console.log(parent);//object
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);