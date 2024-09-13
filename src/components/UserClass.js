import React from "react";
import "../components/css/User.css";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      count2: 1,
    };
  }

  render() {
    const { name } = this.props;
    const { count, count2 } = this.state;

    return (
      <div className="user-card">
        <h1>This is a Class Component</h1>
        <h2>Count : {count}</h2>
        <button
          onClick={() => {
            this.setState({
                count: this.state.count + 1
            });
          }}
        >
          Increase Counter
        </button>
        {/* <h2>Count : {count2}</h2> */}
        <h2>Name: {name}</h2>
        <h3>Location: Dehradun</h3>
        <h4>Contact: @akshaymarch7</h4>
      </div>
    );
  }
}

export default UserClass;
