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
   
    const parent = React.createElement('div',
        {id:"parent"},[
            React.createElement('div',{id:"child1"}),
        React.createElement('h1',{},"Hi I'm an h1 tag from react"),
             React.createElement('h2',{},"Hi I'm an h2 tag from react")
        ],
        React.createElement('div',{id:"child"},[
            React.createElement('h1',{},"Hi I'm an h1 tag from react"),
             React.createElement('h2',{},"Hi I'm an h2 tag from react")
])
            

        )



    // const heading = React.createElement('h1',{
    //     id:"heading",
    //     abc:"def"},
    //     "hello! from react");

        console.log(parent); // this will print the object of the element created by react

    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(parent);

