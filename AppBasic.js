import ReactDOM from "react-dom/client";

//jsx- React element
const parent=(
<h1 className="new" tabIndex="1">
  Hello World</h1>
  );

//React Component- 2 types of Component

//Class Based Component- OLD


//Functional Component- NEW
//javascript function returns a react element
const heading=()=>{
  return <h1>Pinkan</h1>
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading());