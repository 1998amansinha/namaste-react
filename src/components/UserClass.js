import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "",
        location: "",
      },
    };

    // console.log(this.props.phase + " Child Constructor");
  }
  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/1998amansinha");
    const json = await data.json();

    this.setState({ userInfo: json });
    // console.log(json);
  }

  render() {
    const { name, login } = this.state.userInfo;
    return (
      <div className="user-card">
        <h1>This is a Class Component</h1>
        <h2>Name: {name}</h2>
        <h3>Location: {login}</h3>
        <h4>Contact: @akshaymarch7</h4>
      </div>
    );
  }
}

export default UserClass;
