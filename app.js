{/* <script>
    const heading = document.createElement('h1');
    heading.innerText = 'Hello, React! from javascript';
    document.getElementById('root').appendChild(heading);
   </script>  */}

   {/*
    <div id = "parent">
        <div id = "child">
            <h1>hello! from react</h1>
        </div>
    </div>
    */}
   
import React from "react";
import ReactDOM from "react-dom/client";
// from where we are importing react and react-dom is from the node_modules folder which is created when we run npm install react react-dom

//    const parent = React.createElement(
//   "div",
//   { id: "parent" },
//   [
//     React.createElement(
//       "div",
//       { id: "child1", key: "child1" },
//       [
//         React.createElement("h1", { key: "h1-1" }, "Hi I'm an h1 tag from react "),
//         React.createElement("h2", { key: "h2-1" }, "Hi I'm an h2 tag from react")
//       ]
//     ),

//     React.createElement(
//       "div",
//       { id: "child2", key: "child2" },
//       [
//         React.createElement("h1", { key: "h1-2" }, "Hi I'm an h1 tag from react"),
//         React.createElement("h2", { key: "h2-2" }, "Hi I'm an h2 tag from react")
//       ]
//     )
//   ]
// );



//     // const heading = React.createElement('h1',{
//     //     id:"heading",
//     //     abc:"def"},
//     //     "hello! from react");

//     // console.log(heading); 

//     // const root = ReactDOM.createRoot(document.getElementById('root'));
//     // root.render(heading);



//         console.log(parent); // this will print the object of the element created by react

//     const root = ReactDOM.createRoot(document.getElementById('root'));
//     root.render(parent);

const jsxheading = <h1>Hello, React! from JSX</h1>;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxheading);