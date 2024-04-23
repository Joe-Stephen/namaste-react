import React from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("Parent Constructor");
  }
  componentDidMount() {
    console.log("parent mounted");
  }
  render() {
    console.log("Parent Render");
    return (
      <>
        <h1>About</h1>
        {/* <User name={'Joe (function)'}/> */}
        <UserClass name={"Joe (class)"} />
        <UserClass name={"Tony (class)"} />
      </>
    );
  }
}

// function About() {
//   return (
//     <>
{
  /* <h1>About</h1>
<User name={'Joe (function)'}/>
<UserClass name={'Joe (class)'}/> */
}
//     </>
//   )
// }

export default About;
