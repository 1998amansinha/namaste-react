import React from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends React.Component {
  constructor(props) {
    super(props);

    console.log("Parent constructor");
  }

  componentDidMount() {
    console.log("Parent componentDidMount");
  }

  render() {
    console.log("Parent render");
    return (
      <div>
        <h1>About</h1>
        <h3>This is our about page</h3>
        <div>
          <User name={"Aman Sinha (Function)"} />
          <UserClass name={"Aman Sinha (class)"} />
        </div>
      </div>
    );
  }
}

// const About = () => {
//     return (
//         <div>
//             <h1>About</h1>
//             <h3>This is our about page</h3>
//             <div>
//                 <User name={"Aman Sinha (Function)"}/>
//                 <UserClass name={"Aman Sinha (class)"}/>
//             </div>
//         </div>
//     )
// }

export default About;
