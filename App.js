import React from "react";
import ReactDOM from "react-dom/client";

const Heading = ()=><h1>Marvel: The Avengers💫</h1>;

const root = ReactDOM.createRoot(document.getElementById('root'));
const HeadingFunction = ()=>(
  <div>
    {Heading()}
    <Heading />
<Heading></Heading>
<h1>Avengers: Infinity War</h1>
</div>
);
root.render(<HeadingFunction />)
// root.render(heading)
