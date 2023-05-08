import React, { Component } from 'react';
import './styles.css';

class Box1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isBoxVisible: false,
    };

    this.toggleBox = this.toggleBox.bind(this);
  }

  toggleBox() {
    this.setState((prevState) => ({
      isBoxVisible: !prevState.isBoxVisible,
    }));
  }

  render() {
    return (
      <div className="container">
        <button className="btn" onClick={this.toggleBox}>
          Class Component
        </button>
        <div className={`box ${this.state.isBoxVisible ? 'show' : 'hide'}`}>
          <h2>Class Component</h2>
          <p>a simple JavaScript pure function that takes an argument called props and returns a React element (JSX).</p>
        </div>
      </div>
    );
  }
}

function Box2() {
  const [isBoxVisible, setIsBoxVisible] = React.useState(false);

  const toggleBox = () => {
    setIsBoxVisible(!isBoxVisible);
  };

  return (
    <div className="container">
      <button className="btn" onClick={toggleBox}>
        Functional Component
      </button>
      <div className={`box ${isBoxVisible ? 'show' : 'hide'}`}>
        <h2>Functional Component</h2>
        <p>a simple javascript function; it accepts the data in the form of props and returns the react element</p>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div>
      <h1>Styling using Class and Functional Components</h1>
      <Box1 />
      <Box2 />
    </div>
  );
}
