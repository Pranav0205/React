
const parent=React.createElement(
    "div"
    ,{id:"parent"},[
            React.createElement("div" ,{id:"child"},[
            React.createElement("h1",{},"I am h1 tag"),
            React.createElement("h2",{},"i am in h2"),
        ]),
        React.createElement("div" ,{id:"child"},[
            React.createElement("h1",{},"I am h1 tag"),
            React.createElement("h2",{},"i am in h2"),
        ]),
    ]);




// const heading=React.createElement("h1",
// {id:"heading" ,xyz:"abc"},
// "Hello Pranav From React!!"
// );

console.log(parent);

const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);