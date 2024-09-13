import { useState } from "react";
import "../components/css/User.css";

const User = ({name}) => {

    const [count] = useState(0)
    const [count1] = useState(1)

  return (
    <div className="user-card">
      <h1>This is a Functional Component</h1>
      <h2>Count : {count}</h2>
      <h2>Count : {count1}</h2>
      <h2>Name: {name}</h2>
      <h3>Location: Dehradun</h3>
      <h4>Contact: @akshaymarch7</h4>
    </div>
  );
};

export default User;
