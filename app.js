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
import Header from "./Components/Header";
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

// JSX is a syntax extension for JavaScript that allows you to write HTML-like code within your JavaScript code. 
// It is commonly used with React to define the structure and appearance of user interfaces in a more readable and declarative way. 
// JSX allows you to create React elements using a syntax that resembles HTML, making it easier to visualize the component hierarchy and understand the UI structure.
// if the code is written in a single line then we don't need to use () to wrap the jsx code otherwise it will give error
// if the code is written in multiple lines then we have to use () to wrap the jsx code otherwise it will give error
// because babel transpiler will not be able to understand the code and will give error
// const jsxheading = (<h1  className="head" tabIndex="1" > Hello, React! from JSX </h1>

    // );
    // if written in more line we have to use () to wrap the jsx code otherwise it will give error


    // react functional component is a javascript function which returns jsx code
    // normal js function which returns jsx code is not a react functional component
    // react functional component name should start with capital letter otherwise it will give error
    // react functional component can be written in two ways
    // 1. normal function
    // 2. arrow function
    // here title is normal js variable which is storing jsx code and heading is a react functional component which is returning jsx code
//     const Title = 
//         <div>
//             <h1 className = "head"  tabIndex = "5" > 
//          Hello, React! from JSX 
//             </h1>
//              {/* we can write javascript code inside jsx code using {} */}
//           <h1> 
            
//             {/* {1000*2} */}
//             </h1>
//              <h1 className = "head"  tabIndex = "5" > 
//          Hello, React! from JSX 
//          </h1>

//         </div>
//         const Title1 = () => {
//         <div>
//             <h1 className = "head"  tabIndex = "5" > 
//          Hello, React! from JSX 
//             </h1>
//              {/* we can write javascript code inside jsx code using {} */}
//           <h1> 
            
//             {/* {1000*2} */}
//             </h1>
//              <h1 className = "head"  tabIndex = "5" > 
//          Hello, React! from JSX 
//          </h1>

//         </div>
//         }

//         // component composition is the process of combining multiple components to create a new component.
    
//     const Heading = () => {
//         return (
//             <>
//             {/* we can pass js variable or we can perform any action through js just by using {} */}
//             {Title1()}
//             {Title}
//             {/* <Title /> */}
//             <h1> Hello, React! from JSX functional component </h1>
//             </>
//         );
       

//     };
//     //  const Heading2 = () => <h1> Hello, React! from JSX </h1>;

//     //  above two are same but the second one is more concise and readable
    
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(< Heading />);