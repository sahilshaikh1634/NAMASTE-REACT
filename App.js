import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement => Object => HTML(DOM)

// const heading1 = React.createElement("h1", { id: "title", key: "h1"} , "Namaste World!");

// const heading2 = React.createElement("h2", { id: "title", key:"h2"}, "from React");


// JSX => React.createElement => Object => HTML(DOM)

// This is not HTML inside in Javascript but it has HTML like syntax which is used in javascript. 
// 


// React Component 
// - Name of Component start with capital letter. (recommeded)
// - 
// - Functional Component => New
// - Class base Component => OLD

const Title = () => <h1 id="title" key='h1'>Namaste React ..!</h1>

const HeaderComponent = () =>(
        <div id="container">
            <Title/>
            <h1 id="title" key='h2'> Hello It a React Functional Component..</h1>
            <h2 id="title" key='h3'>Hii</h2>
        </div>
    );

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeaderComponent/>);
