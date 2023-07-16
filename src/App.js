import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header"
import Body from "./components/Body"
import Footer from "./components/Footer"
import { restaurant_list } from "./config";
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

// const HeaderComponent = () =>(
//         <div id="container">
//             <Title/>
//             <h1 id="title" key='h2'> Hello It's a React Functional Component..</h1>
//             <h2 id="title" key='h3'>Hii</h2>
//         </div>
// );



const AppLayout = () => {
    return (
        <>
        <Header/>
        <Body/>
        <Footer/>
        </>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);
