/* This is for simple Javascript...
        const heading = document.createElement("h1");
        heading.innerHTML = "Namaste from js!";
        document.getElementById("root").append(heading);
    */

    //The below  is for React...
    const heading1 = React.createElement(
        "h1",
        { id: "title" },  //All tag attributes cam be given inside this object
        "Namaste From React!"
      );
      const heading2 = React.createElement(
          "h2",
          {id: "smallh"},
          "This is example to specify we can create multiple tags using react"
      )
      const heading = React.createElement(
          "div",
          { id : "maindiv"},
          [heading1,heading2]
      )
      const root = ReactDOM.createRoot(document.getElementById("root"));
      root.render(heading); //passing a react element inside a root...