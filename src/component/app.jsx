import React from "react";
import SelectShape from "./selectShape";
import Canvas from "./canvas";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shape: "selection",
      elements: []
    };
  }
  updateShape = shape => {
    this.setState({ shape: shape });
  };
  updateElements = newElements => {
    this.setState({ elements: this.state.elements.concat(newElements) });
  };
  render() {
    console.log(this.state.shape);
    return (
      <>
        <SelectShape updateShape={this.updateShape} />
        <Canvas
          shape={this.state.shape}
          updateElements={this.updateElements}
          elements={this.state.elements}
        />
      </>
    );
  }
}

export default App;
