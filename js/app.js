
// This is the example for create element by React 
// const title = React.createElement(
//     'h1',
//     {id: 'main-title', title: 'This is the title.'},
//     'My First React Element'

// );
// const desc= React.createElement(
//     'p',
//     null,
//     'I just learn how to create a React node and render it to DOM'
// );


// This is example create element by Babel
// normally JS does not accept html element. But with babel, the code is tranformed to React.createElement() form in react--> accepted
// TO INCLUDE JS PART IN BABEL OR REACT, SEPERATE THEM BY {}
var name = "Tram";
var title = React.createElement("h1", null, name, "'s First React Element");
var desc = React.createElement("p", null, "I just learn how to create a React node and render it to DOM");

var header = React.createElement('header', null, title, desc);
ReactDOM.render(header, document.getElementById("root"));