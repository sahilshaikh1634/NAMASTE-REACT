
const heading1 = React.createElement("h1", { id: "title"}, "Namaste World!");

const heading2 = React.createElement("h2", { id: "title"}, "from React");

const container = React.createElement("div", { id : "container"}, [heading1, heading2]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(container);
